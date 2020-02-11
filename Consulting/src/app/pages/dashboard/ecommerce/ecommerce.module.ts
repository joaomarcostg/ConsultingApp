import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core'
import { MatInputModule} from '@angular/material/input'
import { AngularSvgIconModule} from 'angular-svg-icon';
import { ChartsModule } from 'ng2-charts'

import { EcommercehomeComponent } from './ecommercehome/ecommercehome.component';
import { InfoboxComponent } from './ecommercehome/infobox/infobox.component';
import { ProjectionschartComponent } from './ecommercehome/projectionschart/projectionschart.component'

@NgModule({
  declarations: [EcommercehomeComponent, InfoboxComponent, ProjectionschartComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    AngularSvgIconModule,
    ChartsModule,
  ],
  exports: []
})
export class EcommerceModule { }
