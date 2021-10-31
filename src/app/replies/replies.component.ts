import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss']
})
export class RepliesComponent implements OnInit {

  @Input() pickpointId = '';
  replies: any;
  date: any;
  rating: any;
  sum: any;
  quantity: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getReplies(this.pickpointId)
      .subscribe((replies) => {
        this.replies = replies;
        this.sum = 0;
        this.quantity = 0;
        this.replies.forEach((reply) => {
          this.sum += reply.rating;
          this.quantity++;
        });
        this.rating = this.sum / this.quantity;
      })
  }
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  getDate(date) {
    this.date = new Date(date);
    return this.date.getDate() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear();
  }
}
