import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  orderForm: FormGroup;
  body: any;
  user: any;
  pickpoint: any;
  date: any;
  time: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      phoneNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
      commentary: new FormControl(null, []),
      preferedTime: new FormControl('', (control: FormControl) => {
        const value = control.value;
        if (!value) {
          return null;
        }
        if (value.hour < 10) {
          return { tooEarly: true };
        }
        if (value.hour > 21) {
          return { tooLate: true };
        }
        return null;
      })
    })
    this.apiService.getPickpoint(this.route.snapshot.paramMap.get('pickpointId'))
      .subscribe((pickpoint) => {
        this.pickpoint = pickpoint;
      })
    if (localStorage.getItem('token') !== null) {
      this.apiService.getProfile()
        .subscribe((user) => {
          this.user = user;
          this.orderForm.patchValue({ phoneNumber: this.user.phoneNumber, email: this.user.email })
        })      
    }
  }
  onSubmit() {
    if (this.orderForm.invalid) {
      return;
    }
    this.date = new Date();
    this.date.setHours(this.orderForm.value.preferedTime.hour, this.orderForm.value.preferedTime.minute, 0);
    this.orderForm.patchValue({ preferedTime: Date.parse(this.date) });
    this.apiService.createOrder(this.orderForm.value, this.pickpoint, this.user)
      .subscribe((response) => {
        if (response.status == 200) {
          this.body = response.body;
          this.router.navigateByUrl("/fill/" + this.body.response);
        }
      })
  }
}
