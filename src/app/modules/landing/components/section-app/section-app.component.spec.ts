import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAppComponent } from './section-app.component';

describe('SectionAppComponent', () => {
  let component: SectionAppComponent;
  let fixture: ComponentFixture<SectionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
