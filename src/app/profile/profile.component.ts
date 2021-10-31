import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  orders: any;
  date: any;

  constructor(private apiService: ApiService, private router: Router) { }
  
  ngOnInit(): void {
    this.apiService.getProfile()
      .subscribe((user) => {
        this.user = user;
      })
    this.apiService.getOrdersByUser()
      .subscribe((orders) => {
        this.orders = orders;
      })
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/");
  }
  getDate(date) {
    this.date = new Date(date);
    return this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear();
  }
  getTime(date) {
    this.date = new Date(date);
    return this.date.getHours() + ':' + this.date.getMinutes();
  }
}
