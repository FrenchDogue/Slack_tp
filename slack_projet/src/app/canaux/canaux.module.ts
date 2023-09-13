import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CanauxRoutingModule } from './canaux-routing';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccueilComponent, FormComponent],
  imports: [CommonModule, CanauxRoutingModule, ReactiveFormsModule],
  exports: [AccueilComponent, FormComponent],
})
export class CanauxModule {}
