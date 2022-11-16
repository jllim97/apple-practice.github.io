import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./modules/core/core.module";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CoreModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/apple-clone/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
