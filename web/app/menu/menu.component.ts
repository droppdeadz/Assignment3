import {Component} from '@angular/core';
import {Product} from "../products/product";
import {ProductsDataService} from "../service/products-data.service";
import {Router} from "@angular/router";
@Component({
 selector: 'menu',
 templateUrl: 'app/menu/menu.component.html',
 styleUrls:['app/menu/menu.component.css']
})
export class MenuComponent {
  constructor(private productDataService: ProductsDataService, private router: Router ) {
  }
  products:Product[];
  ngOnInit() {
    this.productDataService.getProductsData()
      .subscribe(products => this.products = products);
  }
  showDetail(product: Product){
    this.router.navigate(['/detail',product.productId]);
  }
}
