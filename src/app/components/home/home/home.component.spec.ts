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
import {SelectedAdvertisementsComponent} from "../../advertisement/selected-ads/selected-advertisements.component";
import {FiltertreeComponent} from "../../advertisement/ad-elements/filter-element/filtertree.component";
import {HomeComponent} from "./home.component";
import {HOME} from "@angular/cdk/keycodes";
import {Category} from "../../../shared/models/Category";
import {SubCategory} from "../../../shared/models/SubCategory";

describe('HomeComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let advertisementService: AdvertisementService;

  beforeEach(async () => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NotifierModule,
        HttpClientTestingModule
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

    advertisementService = TestBed.inject(AdvertisementService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should create the HomeComponent', () => {
    let fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
    let component: HomeComponent = fixture.componentInstance;
    
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('SelectedAdvertisementsComponent', () => {
    let dummyAdvertisements: AdvertisementDto[];
    let component: SelectedAdvertisementsComponent;
    let fixture: ComponentFixture<SelectedAdvertisementsComponent>;

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
      httpClientSpy.get.and.returnValue(of(dummyAdvertisements));
      fixture = TestBed.createComponent(SelectedAdvertisementsComponent);
    });

    it('should create the SelectedAdvertisementsComponent', () => {
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should return all 3 advertisements', (done: DoneFn) => {
      advertisementService.getAllAdvertisements(false, '').subscribe({
        next: (result) => {
          expect(result).toEqual(dummyAdvertisements)
          expect(result.length).toBe(3)
          done();
        },
        error: () => {
          done.fail;
        },
      });
    });

  });

  describe('FilterTreeComponent', () => {
    let dummyCategories: Category[] = [];
    let component: FiltertreeComponent;
    let fixture: ComponentFixture<FiltertreeComponent>;

    beforeEach(() => {
      httpClientSpy.get.and.returnValue(of(dummyCategories));
      fixture = TestBed.createComponent(FiltertreeComponent);
    })

    it('should create the FilterTreeComponent', () => {
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });
})
