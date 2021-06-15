import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandComponent } from './brand/brand.component';
import { TechnologyComponent } from './technology/technology.component';
import { SupportComponent } from './support/support.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { DisplayHeaderService } from './services/display.header.service';
import { ProductService } from './services/products.service';
import { IndexComponent } from './index/index.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { FounderComponent } from './founder/founder.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'brand', component: BrandComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'support', component: SupportComponent }, 
  { path: 'shop', component: ShopComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandComponent,
    TechnologyComponent,
    HeaderComponent,
    IndexComponent,
    ProductsContainerComponent,
    FounderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DisplayHeaderService,
    ProductService
  ],

  bootstrap: [AppComponent],
  

})
export class AppModule { }
