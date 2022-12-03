import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {MatDialog} from "@angular/material/dialog";
import {AdvertisementDialogComponent} from "../../../dialogs/advertisement-dialog/advertisement-dialog.component";
import {AppComponent} from "../../../app.component";

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

  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              public appComponent: AppComponent,
              private advertisementService: AdvertisementService,
              public dialog: MatDialog) { }


  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AdvertisementDialogComponent, {data: {title: this.myForm.get('title').value, price: this.myForm.get('price').value}});

    dialogRef.afterClosed().subscribe( result => {
      if (result == 'true') {
        console.log("YES")
        // this.advertisementService.postAdvertisement(this.myForm)
      }
      else {return}
    });
  }

  // public transformToCurrency(input: number) {
  //   let result = input.toFixed(2);
  //   result = result.replace('.', ',')
  //   return result
  // }
}
