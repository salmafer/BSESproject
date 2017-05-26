import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ServicesService} from './../services/services.service';
import {Location} from '@angular/common';
import {Famous} from './../models/famous';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  famous: Famous;

  constructor
  ( private famousService: ServicesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.famousService.getFamous(+params['id'])).subscribe(famous => this.famous = famous);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.famousService.update(this.famous)
      .then(() => this.goBack());
  }

}
