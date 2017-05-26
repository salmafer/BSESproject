import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectedFamousDialog} from './famous-people/famous-people.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import {ServicesService} from './services/services.service';
import {FamousSearchService} from './services/famous-search.service';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FamousSearchComponent } from './famous-search/famous-search.component';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FamousPeopleComponent,
    DashboardComponent,
    FamousSearchComponent,
    SelectedFamousDialog
  ],
  entryComponents: [
    SelectedFamousDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ServicesService,FamousSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
