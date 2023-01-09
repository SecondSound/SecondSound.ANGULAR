import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {AuthManagementService} from "../auth-management.service";
import {AuthService} from "../auth.service";
import {HttpClientModule} from "@angular/common/http";

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService, AuthManagementService ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
