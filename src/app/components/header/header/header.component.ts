import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../../services/search/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  query: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchAdvertisements(reset: boolean) {
    if (reset) {
      this.query = null;
    }
    this.searchService.searchAdvertisements(this.query, reset);
  }
}
