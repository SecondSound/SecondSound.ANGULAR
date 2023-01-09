import { TestBed } from '@angular/core/testing';
import { AdvertisementService } from './advertisement.service';
import {HttpClientModule} from "@angular/common/http";
import {NotifierModule} from "angular-notifier";

describe('AdvertisementService', () => {
  let service: AdvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NotifierModule]
    });
    service = TestBed.inject(AdvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
