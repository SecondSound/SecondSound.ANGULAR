import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {MatDialog} from "@angular/material/dialog";
import {AdvertisementDialogComponent} from "../../../dialogs/advertisement-dialog/advertisement-dialog.component";
import {AppFunctions} from "../../../shared/app-functions";
import {Register} from "../../../shared/models/register.model";
import {AdvertisementModel} from "../../../shared/models/advertisement-model.model";
import {Router} from "@angular/router";

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

  title: string = '';
  description: string = '';
  price: number;
  imgFile: string = "../../../../assets/images/no-image-square.png";

  titleFormControl: FormControl = new FormControl('', [Validators.required]);
  descriptionFormControl: FormControl = new FormControl('', [Validators.required]);
  priceFormControl: FormControl = new FormControl('', [Validators.required]);
  imageFormControl: FormControl = new FormControl

  constructor(private fb: FormBuilder,
              private appFunctions: AppFunctions,
              private advertisementService: AdvertisementService,
              public dialog: MatDialog,
              private router: Router) { }


  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogPrice = this.appFunctions.transformToCurrency(this.price)
    let databasePrice = this.price.toFixed(2).toString()
    let dialogRef = this.dialog.open(AdvertisementDialogComponent, {data: {title: this.title, price: dialogPrice}});

    dialogRef.afterClosed().subscribe( result => {
      if (result == 'true') {
        const newAdvertisement: AdvertisementModel = {
          title: this.title,
          description: this.description,
          price: databasePrice,
          imgFile: this.imgFile
        }
        this.advertisementService.postAdvertisement(newAdvertisement).subscribe( () => {
          this.router.navigate(['']);
        });
      }
      else {return}
    });
  }

  getFormState(): boolean {
    return this.titleFormControl.valid && this.descriptionFormControl.valid &&
      this.priceFormControl.valid;
  }

  onSelectFile(event) {
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any) => {
        this.imgFile=event.target.result;
      }
    }

  }
}
