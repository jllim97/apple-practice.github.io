import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCollapseComponent } from './options-collapse.component';

describe('OptionsCollapseComponent', () => {
  let component: OptionsCollapseComponent;
  let fixture: ComponentFixture<OptionsCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsCollapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
