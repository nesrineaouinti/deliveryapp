import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmComponent } from './editm.component';

describe('EditmComponent', () => {
  let component: EditmComponent;
  let fixture: ComponentFixture<EditmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
