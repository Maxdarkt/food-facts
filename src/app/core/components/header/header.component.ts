import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  desktop!: boolean;
  minScreen!: boolean;

  constructor( ) { }

  ngOnInit(): void {
    this.desktop = true;
    this.minScreen = false;

    this.isDesktop();
    this.isMinScreen();
    window.addEventListener('resize', this.listenResize);
  }

  listenResize(): void {
    this.desktop = window.innerWidth > 985;
    this.minScreen = window.innerWidth < 350;
  }
  isDesktop(): void {
    this.desktop = window.innerWidth > 985;
  }
  isMinScreen(): void {
    this.minScreen = window.innerWidth < 350;
  }
  menuItem(): void {
    if(!this.desktop) {
      const checkboxMenu = document.getElementById("menu-btn")as HTMLInputElement | null;
      if(checkboxMenu !== null) {
        checkboxMenu.checked = false;
      }
      
    }
  }

}
