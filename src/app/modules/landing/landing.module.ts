import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { RightForYouComponent } from './components/right-for-you/right-for-you.component';
import { SectionBoxComponent } from './components/section-box/section-box.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { ArPreviewComponent } from './components/ar-preview/ar-preview.component';
import { SectionAppComponent } from './components/section-app/section-app.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';


@NgModule({
  declarations: [
    OverviewComponent,
    RightForYouComponent,
    SectionBoxComponent,
    ProductCardComponent,
    FeatureSectionComponent,
    ArPreviewComponent,
    SectionAppComponent,
    SectionHeroComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
