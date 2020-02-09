import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  imgUrl = 'assets/only2_1.png'

  dashboard = {
    title: 'Dashboard',
    iconUrl: 'assets/dashboard_icon.svg',
    content: ['Ecommerce', 'CRM', 'Projects'],
  }

  apps = {
    title: 'Apps',
    iconUrl: 'assets/apps_icon.svg',
    content: []
  }
  pages = {
    title: 'Pages',
    iconUrl: 'assets/pages_icon.svg',
    content: []
  }
  uikit = {
    title: 'Ui Kit',
    iconUrl: 'assets/uikit_icon.svg',
    content: []
  }
  widgets = {
    title: 'Widgets',
    iconUrl: 'assets/widgets_icon.svg',
    content: []
  }
  forms = {
    title: 'Forms',
    iconUrl: 'assets/forms_icon.svg',
    content: []
  }
  charts = {
    title: 'Charts',
    iconUrl: 'assets/charts_icon.svg',
    content: []
  }


  constructor() { }

  ngOnInit() {
  }

}
