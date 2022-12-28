import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {catchError, NotFoundError} from "rxjs";
import {BidDto} from "../../../shared/models/BidDto";
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";
import {FormErrorStateMatcher} from "../../../shared/error-state-matcher/FormErrorStateMatcher";
import {FormControl, Validators} from "@angular/forms";
import {AuthManagementService} from "../../../services/auth-management.service";
import {LoginResponse} from "../../../shared/models/login-response.model";
import {AdvertisementDialogComponent} from "../../../dialogs/advertisement-dialog/advertisement-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {BidDialogComponent} from "../../../dialogs/bid-dialog/bid-dialog.component";
import {AppFunctions} from "../../../shared/app-functions";

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
  advertisementFromURL: {id: number};
  advertisement: AdvertisementDto;
  bids: BidDto[];
  error = null;

  isLoggedIn: any;
  user: LoginResponse | undefined;

  bidFormControl: FormControl = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute,
              private appFunctions: AppFunctions,
              public dialog: MatDialog,
              private advertisementService: AdvertisementService,
              private authManagementService: AuthManagementService) {

    this.authManagementService.isUserLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

    this.authManagementService.user$.subscribe((user: LoginResponse) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.advertisementFromURL = {
      id: this.route.snapshot.params['id']
    };

    this.advertisementService.getAdvertisement(this.advertisementFromURL.id)
      .subscribe(data => {
        this.advertisement = data;}, error => {this.error = error; })

    this.advertisementService.getBids(this.advertisementFromURL.id)
      .subscribe(data => {
        this.bids = data})
  }

  openBidDialog() {
    let dialogPrice = this.appFunctions.transformToCurrency(Number(this.bidFormControl.value))
    let dialogRef = this.dialog.open(BidDialogComponent, {data: {action: "place", amount: dialogPrice}});

    dialogRef.afterClosed().subscribe( result => {
      if (result == 'true') {
        this.advertisementService.postBid(dialogPrice, this.advertisement.id)
        location.reload();
      }
    });
  }


  openRemoveDialog(bid: BidDto) {
    let dialogPrice = this.appFunctions.transformToCurrency(Number(bid.amount))
    let dialogRef = this.dialog.open(BidDialogComponent, {data: {action: "remove", amount: dialogPrice}});

    dialogRef.afterClosed().subscribe( result => {
      if (result == 'true') {
        this.advertisementService.deleteBid(bid.id)
        location.reload();
      }
    });

  }
}
