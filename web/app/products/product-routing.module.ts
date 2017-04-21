import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {ProductsComponent} from './list/products.component';
import {ProductsAddComponent} from './add/products.add.component';
import {ProductsViewComponent} from './view/products.view.component';

const productRoutes: Routes = [
  {path: 'detail/:id',component:ProductsViewComponent},
  {path: 'view', component: ProductsViewComponent
    ,
    data: {
      product: {
        "productId": 1,
        "name": "NIKE MERCURIAL SUPERFLY V FG",
        "description": "The Nike Magista Obra II FG Men's Firm-Ground Football Boot provides precise touch and enhanced fit to help you perform playmaking moves on the pitch. Its firm-ground (FG) studs are designed for use on short-grass pitches that may be slightly wet but rarely muddy.",
        "image": "images/magista.jpg",
        "price": 1000,
        "amount": 75,
        "rating": "4.0"

      }
    }
  },
  {path: 'add', component: ProductsAddComponent},
  {path: 'list', component: ProductsComponent},
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {
}
