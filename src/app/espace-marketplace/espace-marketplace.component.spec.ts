import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMarketplaceComponent } from './espace-marketplace.component';

describe('EspaceMarketplaceComponent', () => {
  let component: EspaceMarketplaceComponent;
  let fixture: ComponentFixture<EspaceMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
