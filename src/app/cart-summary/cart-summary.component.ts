import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cart-summary',
  moduleId: module.id,
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {

  constructor(public cart: Cart) { }

}
