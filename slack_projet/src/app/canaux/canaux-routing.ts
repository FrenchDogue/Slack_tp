import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CanalDiscussionComponent } from './pages/canal-discussion/canal-discussion.component';

const routes: Routes = [
  // { path: '', component: AccueilComponent },
  { path: 'canal/:id', component: CanalDiscussionComponent},
  // { path: 'accueil', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanauxRoutingModule {}
