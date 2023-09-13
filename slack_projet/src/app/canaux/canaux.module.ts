import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CanauxRoutingModule } from './canaux-routing';
import { CanalDiscussionComponent } from './pages/canal-discussion/canal-discussion.component';


@NgModule({
  declarations: [AccueilComponent, CanalDiscussionComponent],
  imports: [CommonModule, CanauxRoutingModule],
  exports: [AccueilComponent],
})
export class CanauxModule {}
