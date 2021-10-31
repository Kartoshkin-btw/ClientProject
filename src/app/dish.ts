export class Dish {
  id: number;
  title: string;
  quantity: number;
  price: number;
  constructor(id: number, title: string, quantity: number, price: number) {
    this.id = id;
    this.title = title;
    this.quantity = quantity;
    this.price = price;
  }
}
