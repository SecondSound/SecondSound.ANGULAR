import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import {CurrencyPipe} from "@angular/common";

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


  constructor(private fb: FormBuilder) { }


  matcher = new MyErrorStateMatcher();


  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });



  }

  onSubmit(){
    console.log(this.myForm)
  }

  validate(event: any){
    const t = event.target.value;
    event.target.value =
      t.indexOf(',') >= 0
        ? t.substr(0, t.indexOf(',')) + t.substr(t.indexOf(','), 2)
          : t;
    };
}
