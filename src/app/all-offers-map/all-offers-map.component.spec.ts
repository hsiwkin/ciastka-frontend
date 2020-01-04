import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOffersMapComponent } from './all-offers-map.component';

describe('AllOffersMapComponent', () => {
  let component: AllOffersMapComponent;
  let fixture: ComponentFixture<AllOffersMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOffersMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOffersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
