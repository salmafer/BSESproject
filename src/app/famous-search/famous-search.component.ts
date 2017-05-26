import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FamousSearchService } from '../services/famous-search.service';
import { Famous } from '../models/famous';

@Component({
  selector: 'app-famous-search',
  templateUrl: './famous-search.component.html',
  styleUrls: ['./famous-search.component.css']
})
export class FamousSearchComponent implements OnInit {
  famouses: Observable<Famous[]>;
  private searchTerms = new Subject<string>();


  constructor(
    private famousSearchService: FamousSearchService,
    private router: Router
  ) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.famouses = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
      ? this.famousSearchService.search(term)
      : Observable.of<Famous[]>([]));
  }
  goToDetail(famous: Famous): void {
    const link = ['/detail', famous.id];
    this.router.navigate(link);
  }
}
