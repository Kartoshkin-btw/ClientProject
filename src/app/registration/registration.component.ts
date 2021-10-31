import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  response: any;
  error = false;

  constructor(private apiService: ApiService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      name: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, Validators.minLength(6)]]
    })
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.apiService.register(this.registerForm.value)
      .subscribe((response) => {
        console.log(response.status);
        if (response.status == 200) {
          this.router.navigateByUrl("/login");
        }
      },
        (error) => {
          if (error.status == 200) {
            this.router.navigateByUrl("/login");
          }
          if (error.status == 400) {
            this.error = true;
          }
        }
      )
  }

}
