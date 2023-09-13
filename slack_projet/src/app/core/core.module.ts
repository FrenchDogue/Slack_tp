import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CanauxModule } from '../canaux/canaux.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    CanauxModule
  ],
  exports:[
    NavComponent,
  ]
})
export class CoreModule { }
