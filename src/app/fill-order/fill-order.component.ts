import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { orderItem } from '../orderItem';

@Component({
  selector: 'app-fill-order',
  templateUrl: './fill-order.component.html',
  styleUrls: ['./fill-order.component.scss']
})
export class FillOrderComponent implements OnInit {

  orderId: any;
  items = this.cartService.getItems();
  total = this.cartService.getTotal();
  orderItems = [];

  constructor(private cartService: CartService, private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('orderId');
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
  fillOrder() {
    this.items.forEach((item) => {
      this.orderItems.push(new orderItem(item, item.quantity));
    })
    this.apiService.fillOrder(this.orderId, this.orderItems)
      .subscribe((response) => {
        if (response.status == 200) {
          this.router.navigateByUrl("/payment/" + this.orderId);
        }
      })
  }
}
