import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyIpadComponent } from './buy-ipad.component';

describe('BuyIpadComponent', () => {
  let component: BuyIpadComponent;
  let fixture: ComponentFixture<BuyIpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyIpadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyIpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
