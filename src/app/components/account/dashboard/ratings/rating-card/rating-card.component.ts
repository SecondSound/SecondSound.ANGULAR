import {Component, Input, OnInit} from '@angular/core';
import {Rating} from "../../../../../shared/models/rating.model";

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.css']
})
export class RatingCardComponent implements OnInit {
  @Input() rating: Rating;
  hovered: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
