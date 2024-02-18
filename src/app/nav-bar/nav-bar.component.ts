import { Component, ElementRef, ViewChild } from '@angular/core';
import * as userData from '../userInfo.json';
import { faBars, faC } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  data = userData;
  faBar = faBars;
  close = faClose;
}
