import {Component} from '@angular/core';
import {Product} from '../product';
import {ProductsDataService} from "../../service/products-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'products',
  templateUrl: 'app/products/list/products.component.html',
  styleUrls:['app/products/list/products.component.css']
})
export class ProductsComponent {
  products: Product[];

  constructor (private productDataService:ProductsDataService, private router: Router){}
  ngOnInit(){
    this.productDataService.getProductsData()
      .subscribe(products => this.products= products);
  }
  checkDes(str : String){
    if(str.length<=50){
      return str
    }else{
      var text="";
      var i=0;
      for(i=0;i<47;i++){
        text+=str[i];
      }
      text+="...";
      return text;
    }
  }
  showDetail(product: Product){
    this.router.navigate(['/detail',product.productId]);
  }

}
