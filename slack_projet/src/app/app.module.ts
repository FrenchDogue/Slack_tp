import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CanauxModule } from './canaux/canaux.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CanauxModule,
    HttpClientModule,
    NgbModule,
  ],
})
export class AppModule {}
