import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {MatDialog} from "@angular/material/dialog";
import {AdvertisementDialogComponent} from "../../../dialogs/advertisement-dialog/advertisement-dialog.component";
import {AppFunctions} from "../../../shared/app-functions";
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
  loading: boolean = false;
  advertisementForm: FormGroup
  imgFile: any;
  uploadedFile: string = "../../../../assets/images/no-image-square.png";
  matcher = new MyErrorStateMatcher();
  categories: any;
  subCategories: any;

  constructor(private fb: FormBuilder,
              private appFunctions: AppFunctions,
              private advertisementService: AdvertisementService,
              public dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.advertisementForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      })

    this.advertisementService.getCategories()
      .subscribe(data => { this.categories = data; });
    this.advertisementForm.get('category').valueChanges
      .subscribe(categoryId => {
        this.advertisementService.getSubCategories(categoryId.id)
          .subscribe(data => {
            this.subCategories = data;
          });
      })
  }

  openDialog(): void {
    const formData = new FormData();
    formData.append('file', this.imgFile)

    let dialogPrice = this.appFunctions.transformToCurrency(Number(this.advertisementForm.get('price').value))
    let databasePrice = this.advertisementForm.get('price').value.toString()
    let dialogRef = this.dialog.open(AdvertisementDialogComponent, {data: {title: this.advertisementForm.get('title').value, price: dialogPrice}});
    this.loading = true;

    dialogRef.afterClosed().subscribe( result => {
      if (result == 'true') {
        this.advertisementService.postAdvertisement(this.advertisementForm, databasePrice, formData, this.advertisementForm.get('subCategory').value.id);
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
