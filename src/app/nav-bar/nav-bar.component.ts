import { Component } from '@angular/core';
import * as userData from '../userInfo.json'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  data = userData;
}
