import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { BuyIpadComponent } from './pages/buy-ipad/buy-ipad.component';


@NgModule({
  declarations: [
    BuyIpadComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
