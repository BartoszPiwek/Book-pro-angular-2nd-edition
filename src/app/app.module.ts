import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { StoreFirstGuard } from './storeFirst.guard';

const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
  { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard] },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  providers: [StoreFirstGuard]
})
export class AppModule { }
