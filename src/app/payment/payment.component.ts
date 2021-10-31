import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  orderId: any;

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('orderId');
  }
  paymentOrder() {
    this.apiService.paymentOrder(this.orderId)
      .subscribe((response) => {
        if (response.status == 200) {
          this.router.navigateByUrl('/confirmed/' + this.orderId);
          this.cartService.clearCart();
        }
      })
  }
}
