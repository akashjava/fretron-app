import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpModule,JsonpModule  } from "@angular/http";

import { SharedModule } from '@app/shared';
// import { CoreModule } from '@app/core';

// import { SettingsModule } from './settings';
// import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    // CoreModule,
    SharedModule,
    HttpModule,
    JsonpModule,

    // features
    // StaticModule,
    // SettingsModule,

    // app
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
