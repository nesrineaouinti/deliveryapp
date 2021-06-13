import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmComponent } from './addm.component';

describe('AddmComponent', () => {
  let component: AddmComponent;
  let fixture: ComponentFixture<AddmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
