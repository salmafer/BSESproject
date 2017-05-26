import { Component, OnInit } from '@angular/core';
import {Famous} from './../models/famous';
import {ServicesService} from './../services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  famouses: Famous[] = [];

  constructor(private famousService: ServicesService) {}

  ngOnInit(): void {
    this.famousService.getFamouses()
      .then(famouses => this.famouses = famouses.slice(1, 4));
  }

}
