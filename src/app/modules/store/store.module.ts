import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { BuyIpadComponent } from './pages/buy-ipad/buy-ipad.component';
import { OptionsBoxComponent } from './components/options-box/options-box.component';
import { OptionsCollapseComponent } from './components/options-collapse/options-collapse.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ModalComponent } from './components/modal/modal.component';
import { FaqComponent } from './components/faq/faq.component';
import {LandingModule} from "../landing/landing.module";
import { InTheBoxComponent } from './components/in-the-box/in-the-box.component';
import { ExploreComponent } from './components/explore/explore.component';


@NgModule({
  declarations: [
    BuyIpadComponent,
    OptionsBoxComponent,
    OptionsCollapseComponent,
    ShowcaseComponent,
    ModalComponent,
    FaqComponent,
    InTheBoxComponent,
    ExploreComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    LandingModule
  ]
})
export class StoreModule { }
