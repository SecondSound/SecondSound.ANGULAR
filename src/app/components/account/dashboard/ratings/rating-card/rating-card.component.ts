import {Component, Input, OnInit} from '@angular/core';
import {Rating} from "../../../../../shared/models/rating.model";
import {NotifierService} from "angular-notifier";
import {RatingsService} from "../../../../../services/ratings/ratings.service";

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.css']
})
export class RatingCardComponent implements OnInit {
  @Input() rating: Rating;
  hovered: number = 0;

  constructor(private ratingsService: RatingsService, private notifierService: NotifierService) { }

  ngOnInit(): void {
  }

  updateRating() {
    this.rating.rating = this.hovered;

    this.ratingsService.updateRating(this.rating).subscribe((newRating) => {
      this.rating = newRating;
      this.notifierService.notify('success', 'Successfully updated rating!');
    });
  }

  deleteRating() {
    location.reload();
    this.ratingsService.deleteRating(this.rating).subscribe(() => {
      this.notifierService.notify('success', 'Successfully deleted rating!');
    });
  }
}
