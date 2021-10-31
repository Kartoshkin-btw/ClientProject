import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  listOrganization: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getOrganizations()
      .subscribe((listOrganization) => {
        this.listOrganization = listOrganization;
      })
  }

}
