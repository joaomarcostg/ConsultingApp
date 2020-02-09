import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  settingsIconUrl = 'assets/topbar/settings_icon.svg'
  notificationsIconUrl = 'assets/topbar/notifications_icon.svg'
  languages = [{
    text: 'English',
    iconUrl: "assets/topbar/languages/usa.svg"
  },
  {
    text: 'EnglishUK',
    iconUrl: "assets/topbar/languages/uk.svg"
  }]
  
  currentlang = this.languages[0].iconUrl

  userImgUrl = 'assets/topbar/profile.png'
  
  constructor() { }

  ngOnInit() {
  }

  onChangeLanguage(value){
    this.currentlang = value
  }
}
