import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderNavComponent} from "./components/header-nav/header-nav.component";
import {MobileDrawerComponent} from "./components/mobile-drawer/mobile-drawer.component";
import {StickyHeaderComponent} from "./components/sticky-header/sticky-header.component";
import {RouterModule} from "@angular/router";
import { OverviewLayoutComponent } from './layout/overview-layout/overview-layout.component';
import { StoreLayoutComponent } from './layout/store-layout/store-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { FooterBreadcrumbsComponent } from './components/footer-breadcrumbs/footer-breadcrumbs.component';
import { OverviewInfoComponent } from './components/overview-info/overview-info.component';
import { OverviewOptionsComponent } from './components/overview-options/overview-options.component';
import { OptionBoxComponent } from './components/option-box/option-box.component';



@NgModule({
  declarations: [
    HeaderNavComponent,
    MobileDrawerComponent,
    StickyHeaderComponent,
    OverviewLayoutComponent,
    StoreLayoutComponent,
    FooterComponent,
    SitemapComponent,
    FooterBreadcrumbsComponent,
    OverviewInfoComponent,
    OverviewOptionsComponent,
    OptionBoxComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
