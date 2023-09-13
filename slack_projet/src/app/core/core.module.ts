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
<<<<<<< HEAD
=======
    CanauxModule
>>>>>>> 8f6afec18c0155139684201a23d7cadaddd97a3a
  ],
  exports:[
    NavComponent,
  ]
})
export class CoreModule { }
