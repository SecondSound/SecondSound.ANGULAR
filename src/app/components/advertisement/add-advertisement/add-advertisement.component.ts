import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {MatDialog} from "@angular/material/dialog";
import {AdvertisementDialogComponent} from "../../../dialogs/advertisement-dialog/advertisement-dialog.component";
import {AppFunctions} from "../../../shared/app-functions";
import {Register} from "../../../shared/models/register.model";
import {AdvertisementModel} from "../../../shared/models/advertisementModel.model";
import {Router} from "@angular/router";
import {AdvertisementDto} from "../../../shared/models/advertisementDto.model";
import {LoginCredentials} from "../../../shared/models/login-credentials.model";
import {BehaviorSubject, map, Observable} from "rxjs";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {

  advertisementForm: FormGroup
  imgFile: any;
  uploadedFile: string = "../../../../assets/images/no-image-square.png";


  constructor(private fb: FormBuilder,
              private appFunctions: AppFunctions,
              private advertisementService: AdvertisementService,
              public dialog: MatDialog,
              private router: Router) { }


  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.advertisementForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      })
  }

  openDialog(): void {
    const formData = new FormData();
    console.log(this.imgFile)
    formData.append('file', this.imgFile, this.imgFile.name)

    // this.advertisementForm.get('image').setValue(formData);

    let dialogPrice = this.appFunctions.transformToCurrency(Number(this.advertisementForm.get('price')))
    let databasePrice = Number(this.advertisementForm.get('price')).toFixed(2).toString();
    let dialogRef = this.dialog.open(AdvertisementDialogComponent, {data: {title: this.advertisementForm.get('title'), price: dialogPrice}});

    dialogRef.afterClosed().subscribe( result => {
      if (result == 'true') {

        this.advertisementService.postAdvertisement(this.advertisementForm, formData)
          .subscribe();

      }
    });
  }

  onSelectFile(event) {
    if (event.target.files) {
      let reader = new FileReader();
      this.imgFile = event.target.files[0];

      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any) => {
        this.uploadedFile=event.target.result;
      }
    }

  }
}
