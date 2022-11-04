import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewLayoutComponent} from "./modules/core/layout/overview-layout/overview-layout.component";
import {StoreLayoutComponent} from "./modules/core/layout/store-layout/store-layout.component";

const routes: Routes = [
  {
    path: '',
    component: OverviewLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
      }
    ]
  },
  {
    path: 'shop',
    component: StoreLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
