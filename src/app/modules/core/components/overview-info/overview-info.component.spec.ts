import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewInfoComponent } from './overview-info.component';

describe('OverviewInfoComponent', () => {
  let component: OverviewInfoComponent;
  let fixture: ComponentFixture<OverviewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
