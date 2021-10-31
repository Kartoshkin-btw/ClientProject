import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-confirmed-order',
  templateUrl: './confirmed-order.component.html',
  styleUrls: ['./confirmed-order.component.scss']
})
export class ConfirmedOrderComponent implements OnInit {

  orderId: any;
  order: any;
  orderItems: any;
  date: any;

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('orderId');
    this.apiService.getOrder(this.orderId)
      .subscribe((order) => {
        this.order = order;
      })
    this.apiService.getOrderItems(this.orderId)
      .subscribe((orderItems) => {
        this.orderItems = orderItems;
      })
  }
  getTime(date) {
    this.date = new Date(date);
    return this.date.getHours() + ':' + this.date.getMinutes();
  }
}
