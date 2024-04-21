import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit {
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
