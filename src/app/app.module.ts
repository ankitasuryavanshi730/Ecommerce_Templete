import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './mens/product-details/product-details.component';
import { CheckoutComponent } from './mens/checkout/checkout.component';
import { WishlistComponent } from './mens/wishlist/wishlist.component';
import { OrderCompleteComponent } from './mens/order-complete/order-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MenComponent,
    WomenComponent,
    ContactComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    WishlistComponent,
    OrderCompleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
