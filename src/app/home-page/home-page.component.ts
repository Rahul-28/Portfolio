import { Component } from '@angular/core';
import * as userData from '../userInfo.json'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  data = userData;
}
