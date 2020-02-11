import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceModule } from './pages/dashboard/ecommerce/ecommerce.module'
import { CrmModule } from './pages/dashboard/crm/crm.module'
import { ProjectsModule } from './pages/dashboard/projects/projects.module'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuitemComponent } from './sidebar/menuitem/menuitem.component';
import { SearchboxComponent } from './topbar/searchbox/searchbox.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankComponent } from './pages/blank/blank.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    MenuitemComponent,
    SearchboxComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    AngularSvgIconModule,
    HttpClientModule,
    AppRoutingModule,
    EcommerceModule,
    CrmModule,
    ProjectsModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
