import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyIpadComponent} from "./pages/buy-ipad/buy-ipad.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buy-ipad/ipad',
    pathMatch: 'full'
  },
  {
    path: 'buy-ipad/ipad',
    component: BuyIpadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
