import { Injectable } from '@angular/core';
import { Product } from './product.model';

export class CartLine {
  constructor(public product: Product, public quantity: number) { }

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(line => {
      this.itemCount += line.quantity;
      this.cartPrice += (line.quantity * line.product.price);
    });
  }

  addLine(product: Product, quantity: number = 1) {
    const line = this.lines.find(item => item.product.id === product.id);
    if (line !== undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    const line = this.lines.find(item => item.product.id === product.id);
    if (line !== undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number) {
    const index = this.lines.findIndex(item => item.product.id === id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

}
