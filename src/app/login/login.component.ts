import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = false;
  user: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.apiService.login(this.loginForm.value)
      .subscribe((response) => {
        this.user = response;
        localStorage.setItem('token', this.user.jwtToken);
        this.router.navigateByUrl("/");
      },
        (error) => {
          if (error.status == 401) {
            this.error = true;
          }
          if (error.status == 404) {
            this.error = true;
          }
        }
      )    
  }
}
