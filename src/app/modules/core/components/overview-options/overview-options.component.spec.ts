import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewOptionsComponent } from './overview-options.component';

describe('OverviewOptionsComponent', () => {
  let component: OverviewOptionsComponent;
  let fixture: ComponentFixture<OverviewOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
