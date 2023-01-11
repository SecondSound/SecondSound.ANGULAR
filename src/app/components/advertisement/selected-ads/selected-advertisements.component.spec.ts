import {SelectedAdvertisementsComponent} from "./selected-advertisements.component";
import {NotifierModule} from "angular-notifier";
import {AuthManagementService} from "../../../services/auth-management.service";
import {AuthService} from "../../../services/auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {LoginComponent} from "../../account/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('HomeComponent/SelectedAdvertisements', () => {
  let component: SelectedAdvertisementsComponent;
  let fixture: ComponentFixture<SelectedAdvertisementsComponent>;
  let dummyAdvertisements: AdvertisementDto[];
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let advertisementService: AdvertisementService;

  beforeEach(waitForAsync(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttClient', ['get']);
    TestBed.configureTestingModule({
      imports: [
        NotifierModule,
        HttpClientTestingModule
      ],
      declarations: [
        SelectedAdvertisementsComponent
      ],
      providers: [
        AuthManagementService,
        AuthService,
        AdvertisementService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
  }));


  beforeEach(() => {
    dummyAdvertisements =
      [
        { id: 1,
          title: 'instrument 1',
          description: 'test description 1',
          price: '100.00',
          imgFile: 'https://www.testimage1.com',
          seller: null,
          subCategory: null,
          saved: false
        },
        {
          id: 2,
          title: 'instrument 2',
          description: 'test description 2',
          price: '200.00',
          imgFile: 'https://www.testimage2.com',
          seller: null,
          subCategory: null,
          saved: false
        },
        {
          id: 3,
          title: 'instrument 3',
          description: 'test description 3',
          price: '300.00',
          imgFile: 'https://www.testimage3.com',
          seller: null,
          subCategory: null,
          saved: false
        }
      ]

    advertisementService = TestBed.inject(AdvertisementService)
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    httpClientSpy.get.and.returnValue(of(dummyAdvertisements));
    fixture = TestBed.createComponent(SelectedAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();




  });


  it('should create the component', () => {
    expect(component).toBeTruthy();
  });



  it('should return all advertisements', (done: DoneFn) => {
    advertisementService.getAllAdvertisements(false, '').subscribe({
      next: (result) => {
        expect(result).toEqual(dummyAdvertisements)
        expect(result.length).toBe(dummyAdvertisements.length)
        done();
      },
      error: () => {
        done.fail;
      },
    });
  });

})
