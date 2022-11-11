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
import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { SectionVideoComponent } from './components/section-video/section-video.component';
import { SectionDesignComponent } from './components/section-design/section-design.component';
import {ElementIsInDirective} from "./directive/element-is-in.directive";


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
    SectionVideoComponent,
    SectionDesignComponent,
    ElementIsInDirective
  ],
    exports: [
        ElementIsInDirective,
        RightForYouComponent
    ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
