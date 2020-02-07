import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevenuelocationComponent } from './dashboard/revenuelocation/revenuelocation.component';
import { RevenueComponent } from './dashboard/revenue/revenue.component';
import { ProjectionsComponent } from './dashboard/projections/projections.component';
import { InfoboxComponent } from './dashboard/infobox/infobox.component';
import { MenuitemComponent } from './sidebar/menuitem/menuitem.component';
import { SearchboxComponent } from './topbar/searchbox/searchbox.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
