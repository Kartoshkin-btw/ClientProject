import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-reply',
  templateUrl: './create-reply.component.html',
  styleUrls: ['./create-reply.component.scss']
})
export class CreateReplyComponent implements OnInit {

  replyForm: FormGroup;
  pickpointId: any;
  user: any;
  pickpoint: any;
  date: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pickpointId = this.route.snapshot.paramMap.get('pickpointId');
    this.apiService.getProfile()
      .subscribe((user) => {
        this.user = user;
      })
    this.apiService.getPickpoint(this.pickpointId)
      .subscribe((pickpoint) => {
        this.pickpoint = pickpoint;
      })
    this.replyForm = new FormGroup({
      rating: new FormControl(null, [Validators.required]),
      text: new FormControl(null, [Validators.required])
    })
  }
  onSubmit() {
    if (this.replyForm.invalid) {
      return;
    }
    this.date = new Date();
    this.apiService.createReply(this.replyForm.value, Date.parse(this.date), this.pickpoint, this.user)
     .subscribe((response) => {})
    this.router.navigateByUrl("/menu/" + this.pickpointId);
  }
}
