import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Famous} from './../models/famous';



@Injectable()
export class ServicesService {

  private famousesUrl = 'api/famouses';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getFamouses(): Promise<Famous[]> {
    return this.http.get(this.famousesUrl)
      .toPromise()
      .then(response => response.json().data as Famous[])
      .catch(this.handleError);
  }
  getFamous(id: number): Promise<Famous> {
    const url = `${this.famousesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Famous)
      .catch(this.handleError);
  }
  update(famous: Famous): Promise<Famous> {
    const url = `${this.famousesUrl}/${famous.id}`;
    return this.http
      .put(url, JSON.stringify(famous), {headers: this.headers})
      .toPromise()
      .then(() => famous)
      .catch(this.handleError);
  }
  create(name: string): Promise<Famous> {
    return this.http
      .post(this.famousesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.famousesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
