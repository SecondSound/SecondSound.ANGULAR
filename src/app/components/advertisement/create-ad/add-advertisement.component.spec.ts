import {TestBed} from "@angular/core/testing";
import {AddAdvertisementComponent} from "./add-advertisement.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NotifierModule} from "angular-notifier";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {of} from "rxjs";

describe('AddAdvertisementComponent', () => {
  let dummyCategories: any;
  let dummySubCategories: any[] = [];
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let advertisementService: AdvertisementService;

  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      declarations: [AddAdvertisementComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        NotifierModule,
        MatDialogModule
      ],
      providers: [
        AdvertisementService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    advertisementService = TestBed.inject(AdvertisementService);
    dummyCategories =
      [
        {id: 1, name: 'Category 1'},
        {id: 2, name: 'Category 2'},
        {id: 3, name: 'Category 3'},
      ]

    dummySubCategories =
      [
        {id: 11, name: 'SubCategory 11'},
        {id: 22, name: 'SubCategory 22'},
        {id: 33, name: 'SubCategory 33'},
      ]
  });

  it('should return all 3 categories', () => {
    httpClientSpy.get.and.returnValue(of(dummyCategories));
    advertisementService.getCategories().subscribe(result => {
      expect(result).toEqual(dummyCategories)
      expect(result[0].name).toBe('Category 1')
    });
  });

  it('should return all 3 subCategories', () => {
    httpClientSpy.get.and.returnValue(of(dummySubCategories));
    advertisementService.getCategories().subscribe(result => {
      expect(result).toEqual(dummySubCategories)
      expect(result[0].name).toBe('SubCategory 11')
      expect(result[0].id).not.toBe(2)
    });
  });
})
