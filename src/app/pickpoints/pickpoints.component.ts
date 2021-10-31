import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-pickpoints',
  templateUrl: './pickpoints.component.html',
  styleUrls: ['./pickpoints.component.scss']
})
export class PickpointsComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  pickpoints: any;
  orgId: string;
  organization: any;

  ngOnInit(): void {
    this.orgId = this.route.snapshot.paramMap.get('orgId');
    this.apiService.getOrganization(this.orgId)
      .subscribe((organization) => {
        this.organization = organization;
      })
    this.apiService.getPickpointsByOrg(this.orgId)
      .subscribe((pickpoints) => {
        this.pickpoints = pickpoints;
      })
  }
}
