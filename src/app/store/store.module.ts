import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { PaginationDirective } from './pagination.directive';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, PaginationDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [StoreComponent, CheckoutComponent, CartDetailComponent],
})
export class StoreModule { }
