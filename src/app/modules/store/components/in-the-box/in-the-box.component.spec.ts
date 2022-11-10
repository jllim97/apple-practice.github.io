import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheBoxComponent } from './in-the-box.component';

describe('InTheBoxComponent', () => {
  let component: InTheBoxComponent;
  let fixture: ComponentFixture<InTheBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTheBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTheBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
