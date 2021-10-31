import { Dish } from "./dish";

export class orderItem {
  dish: Dish;
  quantity: number;
  constructor(dish: Dish, quantity: number) {
    this.dish = dish;
    this.quantity = quantity;
  }
}
