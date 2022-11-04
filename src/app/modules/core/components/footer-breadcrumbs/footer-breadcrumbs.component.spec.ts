import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBreadcrumbsComponent } from './footer-breadcrumbs.component';

describe('FooterBreadcrumbsComponent', () => {
  let component: FooterBreadcrumbsComponent;
  let fixture: ComponentFixture<FooterBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBreadcrumbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
