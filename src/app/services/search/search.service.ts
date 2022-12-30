import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchQuery$: Observable<string> = this.searchQuery.asObservable();

  private resetFilter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  resetFilter$: Observable<boolean> = this.resetFilter.asObservable();

  constructor(private router: Router) { }

  searchAdvertisements(query: string, reset: boolean) {
    this.router.navigate(['']);
    this.searchQuery.next(query);
    this.resetFilter.next(reset);
  }
}
