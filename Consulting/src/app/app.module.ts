import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RevenuelocationComponent } from './pages/dashboard/revenuelocation/revenuelocation.component';
import { RevenueComponent } from './pages/dashboard/revenue/revenue.component';
import { ProjectionsComponent } from './pages/dashboard/projections/projections.component';
import { InfoboxComponent } from './pages/dashboard/infobox/infobox.component';
import { MenuitemComponent } from './sidebar/menuitem/menuitem.component';
import { SearchboxComponent } from './topbar/searchbox/searchbox.component';
import { BlankComponent } from './pages/blank/blank.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    RevenuelocationComponent,
    RevenueComponent,
    ProjectionsComponent,
    InfoboxComponent,
    MenuitemComponent,
    SearchboxComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    AngularSvgIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
