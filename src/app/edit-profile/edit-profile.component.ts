import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  modifyForm: FormGroup;
  user: any;

  constructor(private apiService: ApiService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.modifyForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)])
    })
    this.apiService.getProfile()
      .subscribe((user) => {
        this.user = user;
        this.modifyForm.patchValue({ username: this.user.username, name: this.user.name, phoneNumber: this.user.phoneNumber, email: this.user.email })
      })
  }
  onSubmit() {
    if (this.modifyForm.invalid) {
      return;
    }
    console.log(this.modifyForm.value)
    this.apiService.modifyProfile(this.user.id, this.modifyForm.value)
      .subscribe((response) => {
        console.log(response.status);
        if (response.status == 200) {
          localStorage.removeItem('token');
          this.router.navigateByUrl("/login");
        }
      })
  }

}
