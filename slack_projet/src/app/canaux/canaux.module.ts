import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CanauxRoutingModule } from './canaux-routing';

import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CanalDiscussionComponent } from './pages/canal-discussion/canal-discussion.component';

@NgModule({
  declarations: [AccueilComponent, CanalDiscussionComponent],
  imports: [CommonModule, CanauxRoutingModule, ReactiveFormsModul],
  exports: [AccueilComponent, FormComponen],

})
export class CanauxModule {}
