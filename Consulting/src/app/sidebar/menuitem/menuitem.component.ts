import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {

  @Input() content = ''
  @Input() title = ''
  @Input() iconUrl = ''
  count = ''
  buttonImg = 'assets/itembtn_icon.svg'
  isHidden = true
  btnStyle = {
    width: '16px',
    height: '16px',
    backgroundImage: `url(${this.buttonImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundColor: 'inherit',
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    color: '#FFF',
    fontSize: '10px',
    fontWeight: 'bold',
  }
  contentStyle = {
    fontSize: '14px',
    margin: '4px 0px',
    width: '100%'
  }

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.isHidden = !this.isHidden

    if (this.isHidden) {
      this.btnStyle = {
        width: '16px',
        height: '16px',
        backgroundImage: `url(${this.buttonImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundColor: 'inherit',
        border: 'none',
        borderRadius: '0px',
        cursor: 'pointer',
        color: '#FFF',
        fontSize: '10px',
        fontWeight: 'bold',
      }
      this.count = ""
    }
    else {
      this.btnStyle = {
        width: '16px',
        height: '16px',
        backgroundColor: '#48D0A3',
        backgroundImage: 'none',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        border: '1px solid #8776e0',
        borderRadius: '4px',
        cursor: 'pointer',
        color: '#FFF',
        fontSize: '10px',
        fontWeight: 'bold',
      }
      this.count = `${this.content.length}`
    }

  }

  
}
