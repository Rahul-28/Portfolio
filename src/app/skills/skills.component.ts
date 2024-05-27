import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  resourceUrl = "https://api.github.com/users/Rahul-28";
  repoDataUrl = "https://api.github.com/users/Rahul-28/repos";
  gitUserData!: any;
  gitRepoData!: any;

  constructor(private _http: HttpClient) {};
  
  ngOnInit(): void {

    // get repo data
    this._http.get(this.repoDataUrl).subscribe(
      (data) => {
        console.log(data);
        this.gitRepoData = data
      },
      (err) => {
        console.error(err);
      }
    );

  }
}
