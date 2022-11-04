import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightForYouComponent } from './right-for-you.component';

describe('RightForYouComponent', () => {
  let component: RightForYouComponent;
  let fixture: ComponentFixture<RightForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightForYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
