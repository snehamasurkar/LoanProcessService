import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerenquiryComponent } from './customerenquiry.component';

describe('CustomerenquiryComponent', () => {
  let component: CustomerenquiryComponent;
  let fixture: ComponentFixture<CustomerenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
