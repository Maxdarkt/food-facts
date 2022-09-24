import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  desktop!: boolean;

  constructor( ) { }

  ngOnInit(): void {
    this.desktop = true;

    this.isDesktop();
    window.addEventListener('resize', this.isDesktop);
  }

  isDesktop(): void {
    this.desktop = window.innerWidth > 985;
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
