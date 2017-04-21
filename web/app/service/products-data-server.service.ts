import {Injectable} from '@angular/core';
import {Product} from '../products/product';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Rx";


@Injectable()
export class ProductsDataServerService {
  constructor(private http: Http){}
  getProductsData(){
    let productArray:Product[];
    return this.http.get('http://35.167.122.139:8080/assignment3/product')
      .map(res => res.json());

  }

  getProduct(id:number){
    let product:Product;
    return this.http.get('http://35.167.122.139:8080/assignment3/product/'+id)
      .map((res:Response) => {
        if (res) {
          if (res.status === 200) {
            return res.json()
          }
          if (res.status === 204){
            return null;
          }
        }
      })
      .catch((error: any) => {
        if (error.status === 500) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 400) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 409) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 406) {
          return Observable.throw(new Error(error.status));
        }
        return error;
      })
    ;


  }

  addProduct(product: Product,file:any) {
    let formData = new FormData();
    let fileName: string;

    formData.append('file', file);
    return this.http.post('http://35.167.122.139:8080/assignment3/product/image', formData)
      .flatMap(filename => {
        product.image = filename.text();
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'post'});
        let body = JSON.stringify(product);
        return this.http.post('http://35.167.122.139:8080/assignment3/product', body, options)
          .map(res => {
            return res.json()
          })
          .catch((error: any) => {
            return Observable.throw(new Error(error.status))
          })
      })



  }
}
