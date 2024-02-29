import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import * as userData from '../userInfo.json';
import { HttpClient } from '@angular/common/http';
import { register } from 'swiper/element/bundle'
register();
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  data = userData;
  userResourceUrl = 'https://api.github.com/users';
  repoResourceUrl = ''
  gitProfileData: any
  gitRepoData: any
  currentIndex: number = 0;

  constructor(
    private http: HttpClient
  ) {
    this.getGitDetails();
    this.getRepoDetails();
  }

  getGitDetails(): void {
    this.http.get(`${this.userResourceUrl}/${this.data.gitusername}`).subscribe((data: any) => {
      console.log(data);
      this.gitProfileData = data;
    });
  }

  getRepoDetails(): void {
    this.http.get(`${this.userResourceUrl}/${this.data.gitusername}/repos`).subscribe((data: any) => {
      console.log(data);
      this.gitRepoData = data;
    });
  }

  nextCard() {
    if (this.currentIndex < this.gitRepoData.length - 1) {
      this.currentIndex++;
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}
