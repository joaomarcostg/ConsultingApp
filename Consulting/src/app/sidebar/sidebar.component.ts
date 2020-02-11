import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  imgUrl = 'assets/sidebar/companylogo.png'

  dashboard = {
    title: 'Dashboard',
    iconUrl: 'assets/sidebar/dashboard_icon.svg',
    content: ['ecommerce', 'crm', 'projects'],
  }

  apps = {
    title: 'Apps',
    iconUrl: 'assets/sidebar/apps_icon.svg',
    content: []
  }
  pages = {
    title: 'Pages',
    iconUrl: 'assets/sidebar/pages_icon.svg',
    content: []
  }
  uikit = {
    title: 'Ui Kit',
    iconUrl: 'assets/sidebar/uikit_icon.svg',
    content: []
  }
  widgets = {
    title: 'Widgets',
    iconUrl: 'assets/sidebar/widgets_icon.svg',
    content: []
  }
  forms = {
    title: 'Forms',
    iconUrl: 'assets/sidebar/forms_icon.svg',
    content: []
  }
  charts = {
    title: 'Charts',
    iconUrl: 'assets/sidebar/charts_icon.svg',
    content: []
  }


  constructor() { }

  ngOnInit() {
  }

}
