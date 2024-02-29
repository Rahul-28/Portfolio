import { Component, ElementRef, ViewChild } from '@angular/core';
import * as userData from '../userInfo.json';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  data = userData;
  faBar = faBars;
  close = faClose;
  showMenu = false;
}
