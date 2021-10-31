import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Dish } from '../dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private cartService: CartService, private router: Router) { }

  pickpoint: any;
  pickpointId: any;
  menuId: any;
  categories: any;
  category: any;
  dish: any;
  items = this.cartService.getItems();
  total = this.cartService.getTotal();

  ngOnInit(): void {
    this.pickpointId = this.route.snapshot.paramMap.get('pickpointId');
    this.apiService.getPickpoint(this.pickpointId)
      .subscribe((pickpoint) => {
        this.pickpoint = pickpoint;
        this.getCategories();
      })
    this.category = "0";
  }
  getCategories() {
    this.apiService.getCategoryByMenu(this.pickpoint.menu.id)
      .subscribe((categories) => {
        this.categories = categories;
      })
  }
  setCategory(categoryTitle) {
    this.category = categoryTitle;
  }
  addToCart(item) {
    this.dish = new Dish(item.id, item.title, 1, item.price);
    this.cartService.addToCart(this.dish);
    this.getTotal();
  }
  augmentQuantity(id) {
    this.cartService.augmentQuantity(id);
    this.getTotal();
  }

  diminishQuantity(id) {
    this.cartService.diminishQuantity(id);
    this.getTotal();
  }

  getTotal() {
    this.total = this.cartService.getTotal();
  }
  createOrder() {
    this.router.navigateByUrl("/createOrder/" + this.pickpointId);
  }
}
