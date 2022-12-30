import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchQuery$: Observable<string> = this.searchQuery.asObservable();

  constructor() { }

  searchAdvertisements(query: string) {
    this.searchQuery.next(query);
  }
}
