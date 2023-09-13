import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CanauxRoutingModule } from './canaux-routing';
<<<<<<< HEAD
import { CanalDiscussionComponent } from './pages/canal-discussion/canal-discussion.component';

=======
import { CanauxMessagesService } from './services/canaux-messages.service';
>>>>>>> 8f6afec18c0155139684201a23d7cadaddd97a3a

@NgModule({
  declarations: [AccueilComponent, CanalDiscussionComponent],
  imports: [CommonModule, CanauxRoutingModule],
  exports: [AccueilComponent],
})
export class CanauxModule {}
