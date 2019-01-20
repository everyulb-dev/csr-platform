import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LoginModule } from './modules/login/login.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
