import { Component, OnInit } from '@angular/core';
import {ServicesService} from './../services/services.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import {Famous} from './../models/famous';
import {Router} from '@angular/router';



@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  famouses: Famous[] = [];
  selectedFamous: Famous;
  dialogRef: MdDialogRef<SelectedFamousDialog>;

  constructor (
    private famousService: ServicesService,
    private router: Router,
    private dialog: MdDialog) {}

  getFamouses(): void {
    this.famousService.getFamouses().then(famouses => this.famouses = famouses);
  }
  ngOnInit(): void {
    this.getFamouses();
  }
  onSelect(famous: Famous): void {
    //this.selectedFamous =  famous;
    this.dialogRef = this.dialog.open(SelectedFamousDialog);
    this.dialogRef.componentInstance.selectedFamous = famous;
  }
  ToDetail(): void {
    this.router.navigate(['/detail', this.selectedFamous.id]);

  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.famousService.create(name)
      .then(famous => {
        this.famouses.push(famous);
        this.selectedFamous = null;
      });
  }
  delete(famous: Famous): void {
    this.famousService
      .delete(famous.id)
      .then(() => {
        this.famouses = this.famouses.filter(f => f !== famous);
        if (this.selectedFamous === famous) { this.selectedFamous = null; }
      });
  }
}
@Component({
  selector: 'selected-famous-dialog',
  template: `
    <h2>
      {{selectedFamous.name | uppercase}}
    </h2>
    <button md-raised-button color="primary" (click)="gotoDetail()">View Details</button>
    <button md-raised-button (click)="dialogRef.close()">Close dialog</button>`
})
export class SelectedFamousDialog {
  selectedFamous: any;
  constructor(
    public dialogRef: MdDialogRef<SelectedFamousDialog>,
    private router: Router) { }
  gotoDetail(): void {
    this.dialogRef.close();
    this.router.navigate(['/detail', this.selectedFamous.id]);
  }
}
