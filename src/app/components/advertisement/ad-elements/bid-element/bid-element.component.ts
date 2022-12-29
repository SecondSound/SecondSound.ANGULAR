import {Component, Input, OnInit} from '@angular/core';
import {BidDialogComponent} from "../../../../dialogs/bid-dialog/bid-dialog.component";
import {BidDto} from "../../../../shared/models/BidDto";
import {AppFunctions} from "../../../../shared/app-functions";
import {MatDialog} from "@angular/material/dialog";
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {FormControl, Validators} from "@angular/forms";
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";
import {ActivatedRoute} from "@angular/router";
import {LoginResponse} from "../../../../shared/models/login-response.model";
import {AuthManagementService} from "../../../../services/auth-management.service";

@Component({
  selector: 'app-bid-element',
  templateUrl: './bid-element.component.html',
  styleUrls: ['./bid-element.component.css']
})
export class BidElementComponent implements OnInit {

  constructor(private appFunctions: AppFunctions,
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


  bidFormControl: FormControl = new FormControl('', [Validators.required]);
  @Input() advertisement: AdvertisementDto;
  @Input() bids: BidDto[] = [];
  isLoggedIn: any;
  user: LoginResponse | undefined;


  ngOnInit(): void {
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
