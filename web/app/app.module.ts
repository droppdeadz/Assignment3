import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/list/products.component';
import {ProductsAddComponent} from './products/add/products.add.component';
import {ProductsViewComponent} from './products/view/products.view.component';
import {TimeComponent} from './time/time.component';
import {FormsModule} from '@angular/forms';
import {ProductsDataService}from './service/products-data.service';
import {HttpModule} from '@angular/http';
import {MenuComponent} from "./menu/menu.component";
import {FileNotFoundComponent} from "./filenotfound/file-not-found.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProductRoutingModule} from "./products/product-routing.module";
import {ProductsDataDBService} from "./service/products-data-db.service";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ProductsDataServerService} from "./service/products-data-server.service";


@NgModule({
  declarations: [AppComponent,
    ProductsComponent,
    ProductsAddComponent,
    ProductsViewComponent,
    TimeComponent,
    MenuComponent, FileNotFoundComponent],
  imports: [BrowserModule, FormsModule, HttpModule,
    ProductRoutingModule,AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [{provide:ProductsDataService,useClass:ProductsDataServerService},
    { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule {
}
