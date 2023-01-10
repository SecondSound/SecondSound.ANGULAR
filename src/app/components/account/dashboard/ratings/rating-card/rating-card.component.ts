import {Component, Input, OnInit} from '@angular/core';
import {Rating} from "../../../../../shared/models/rating.model";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.css']
})
export class RatingCardComponent implements OnInit {
  @Input() rating: Rating;
  hovered: number = 0;

  constructor(private notifierService: NotifierService) { }

  ngOnInit(): void {
  }

  updateRating($event: MouseEvent) {
    this.rating.rating = this.hovered;
    console.log(this.rating.rating);
    this.notifierService.notify('success', 'Successfully updated rating!');
  }
}
