import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmarketComponent } from './sidebarmarket.component';

describe('SidebarmarketComponent', () => {
  let component: SidebarmarketComponent;
  let fixture: ComponentFixture<SidebarmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
