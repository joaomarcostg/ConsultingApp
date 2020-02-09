import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  searchIcon = "assets/search_icon.svg"
  settingsIcon = ""
  notificationsIcon = ""
  userImg = ""

  constructor() { }

  ngOnInit() {
  }

}
