import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serach-order',
  templateUrl: './serach-order.component.html',
  styleUrls: ['./serach-order.component.scss']
})
export class SerachOrderComponent implements OnInit {

  orderId: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  searchOrder() {
    this.router.navigateByUrl('/confirmed/' + this.orderId);
  }
}
