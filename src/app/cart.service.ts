import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  check: boolean;
  total: number;

  addToCart(product) {
    this.check = false;
    this.items.forEach((item) => {
      if (item.id == product.id) {
        this.augmentQuantity(item.id)
        this.check = true;
      }
    });
    if (this.check == false) {
      this.items.push(product);
      this.total += product.price;
      this.check = false;
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.total = 0;
    return this.items;
  }

  augmentQuantity(dishId) {
    this.items.forEach((item) => {
      if (item.id == dishId) {
        item.quantity += 1;
        this.total += item.price;
      }
    });
  }

  diminishQuantity(dishId) {
    this.items.forEach((item, index) => {
      if (item.id == dishId) {
        if (item.quantity == 1) {
          this.items.splice(index, 1);
        }
        else {
          item.quantity -= 1;
        }
        this.total -= item.price;
      }
    });
  }

  getTotal() {
    if (this.total == undefined) { this.total = 0 }
    return this.total;
  }

  constructor() { }
}
