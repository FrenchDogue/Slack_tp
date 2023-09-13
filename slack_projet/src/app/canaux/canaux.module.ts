import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CanauxRoutingModule } from './canaux-routing';
import { CanauxMessagesService } from './services/canaux-messages.service';

@NgModule({
  declarations: [AccueilComponent],
  imports: [CommonModule, CanauxRoutingModule],
  exports: [AccueilComponent],
})
export class CanauxModule {}
