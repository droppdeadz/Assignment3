import {Injectable} from '@angular/core';
import {Product} from '../products/product';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

@Injectable()
export class ProductsDataDBService {

  products:Product[]=[
    {
      "productId": 1,
      "name":"NIKE MERCURIAL SUPERFLY V FG",
      "description":"The Nike Mercurial Superfly V Men's Firm-Ground Football Boot provides a perfect fit, exceptional ball touch and explosive traction for ultimate speed on short-grass pitches.",
      "image":"images/mercurial.jpg",
      "price": 10000,
      "amount": 100,
      "rating": "4.3"
    },
    {
      "productId": 2,
      "name":"NIKE HYPERVENOM PHANTOM 3 DF FG",
      "description":"Made for the attacking goalscorer, the Nike Hypervenom Phantom 3 Men's Firm-Ground Football Boot is designed to increase shot velocity and enable quick changes of direction on short-grass pitches.",
      "image":"images/hypervenom.jpg",
      "price": 10000,
      "amount": 50,
      "rating": "5.0"
    },
    {
      "productId": 3,
      "name":"NIKE MAGISTA OBRA II FG",
      "description":"The Nike Magista Obra II FG Men's Firm-Ground Football Boot provides precise touch and enhanced fit to help you perform playmaking moves on the pitch. Its firm-ground (FG) studs are designed for use on short-grass pitches that may be slightly wet but rarely muddy.",
      "image":"images/magista.jpg",
      "price": 10000,
      "amount": 75,
      "rating": "4.0"
    }
  ];

  getProductsData(){
    return new Observable<Product[]>((subscriber:Subscriber<Product[]>)=>subscriber.next(this.products));
  }
  getProduct(productId:number){
    let product = this.products.find(product=> product.productId === +productId);
    return new Observable<Product>((subscriber:Subscriber<Product>)=>subscriber.next(product));
  }

  addProduct(product:Product){
    console.log(product);
    product.productId = this.products.length+1;
    this.products.push(product);
    console.log(this.products);
  }
}
