import { Component } from '@angular/core';
import { Etheme } from '../../enums/etheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon: string = Etheme.ICON_MOON;
  public textTheme: string = Etheme.TEXT_MOON;
  
  constructor() {}

  toggleDarkTheme() {
    const theme = document.body.classList.toggle('dark-theme');
    if(theme){
      this.textTheme = Etheme.TEXT_SUN;
      return this.icon = Etheme.ICON_SUN
    };
    
    this.textTheme = Etheme.TEXT_MOON
    return  this.icon = Etheme.ICON_MOON;
  }
}