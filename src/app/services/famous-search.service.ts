import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Famous} from './../models/famous';

@Injectable()
export class FamousSearchService {

  constructor(private http: Http) { }
  search(term: string): Observable<Famous[]> {
    return this.http
      .get(`app/famouses/?name=${term}`)
      .map((r: Response) => r.json().data as Famous[]);
  }


}
