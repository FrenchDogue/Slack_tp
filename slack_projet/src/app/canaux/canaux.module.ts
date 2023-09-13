import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CanauxRoutingModule } from './canaux-routing';

@NgModule({
  declarations: [AccueilComponent],
  imports: [CommonModule, CanauxRoutingModule],
  exports: [AccueilComponent],
})
export class CanauxModule {}
