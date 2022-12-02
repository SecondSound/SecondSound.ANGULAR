import { Component, OnInit } from '@angular/core';
import {FormErrorStateMatcher} from "../../../../shared/error-state-matcher/FormErrorStateMatcher";
import {FormControl, Validators} from "@angular/forms";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.css']
})
export class ConfirmRegistrationComponent implements OnInit {
  token: string = '';
  tokenLength: number = 36;

  tokenFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.tokenLength),
    Validators.maxLength(this.tokenLength)
  ]);
  matcher: FormErrorStateMatcher = new FormErrorStateMatcher();

  constructor(private authManagementService: AuthManagementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.token = params['token'];
        }
      );

    if (this.token) {
      this.confirmUser();
    }
  }

  confirmUser() {
    this.authManagementService.confirmUser(this.token);
  }

  resendMail() {
    console.log('resend mail clicked');
  }
}
