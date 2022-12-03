import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-advertisement-dialog',
  templateUrl: './advertisement-dialog.component.html',
  styleUrls: ['./advertisement-dialog.component.css']
})
export class AdvertisementDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

}
