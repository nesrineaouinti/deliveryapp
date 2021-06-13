import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverycompanyComponent } from './deliverycompany.component';

describe('DeliverycompanyComponent', () => {
  let component: DeliverycompanyComponent;
  let fixture: ComponentFixture<DeliverycompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverycompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
