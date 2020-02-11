import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss']
})
export class InfoboxComponent implements OnInit {

  @Input() type = ''
  @Input() value = ''
  @Input() percent = ''
  @Input() period = ''
  
  percentStyle() {
    const parsedpercent = parseInt(this.percent)
    if(parsedpercent > 0){
      return ({color: '#22ff16'})
    }
    else{
      return({color: '#ff2d2d'})
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
