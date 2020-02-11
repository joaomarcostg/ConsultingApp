import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommercehomeComponent } from './ecommercehome/ecommercehome.component'

const routes: Routes = [
  {
    path: 'ecommerce',
    component: EcommercehomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
