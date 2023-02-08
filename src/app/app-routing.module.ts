import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { CheckoutComponent } from './mens/checkout/checkout.component';
import { OrderCompleteComponent } from './mens/order-complete/order-complete.component';
import { ProductDetailsComponent } from './mens/product-details/product-details.component';
import { WishlistComponent } from './mens/wishlist/wishlist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"men",component:MenComponent},
  {path:"women",component:WomenComponent},
  {path:"contact",component:ContactComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"order-complete",component:OrderCompleteComponent},
  {path:"product-details",component:ProductDetailsComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"**",redirectTo:'/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
