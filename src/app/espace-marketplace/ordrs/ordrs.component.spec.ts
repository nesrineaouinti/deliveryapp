import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdrsComponent } from './ordrs.component';

describe('OrdrsComponent', () => {
  let component: OrdrsComponent;
  let fixture: ComponentFixture<OrdrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
