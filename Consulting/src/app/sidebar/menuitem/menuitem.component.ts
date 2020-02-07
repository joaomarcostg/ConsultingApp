import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {
  
  buttonImg = 'assets/angle-right-solid.svg'
  imgUrl = ''

  btnStyle = {
    width: '24px',
    height: '24px',
    backgroundImage: `url(${this.buttonImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundColor: '#8776E0',
    border: 'none',
    cursor: 'pointer',
    color: '#FFF',
    fontSize: '16px',
    fontWeight: 'bold',
  }

  isHidden = true
  title = ''

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.isHidden = !this.isHidden
  }
}
