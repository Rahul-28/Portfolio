import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit, AfterViewInit {

  resourceUrl = "https://api.github.com/users/Rahul-28";
  repoDataUrl = "https://api.github.com/users/Rahul-28/repos";
  gitUserData!: any;
  gitRepoData!: any;
  techStackImages: string[] = ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"]

  constructor(private _http: HttpClient) {};
  
  ngOnInit(): void {

    // TODO: use this later releases
    // get repo data
  
    // this._http.get(this.repoDataUrl).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.gitRepoData = data
    //   },
    //   (err) => {
    //     console.error(err);
    //   }
    // );

  }


  ngAfterViewInit(): void {

    // GSAP animation for the content
    gsap.from(".skills-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1,
      ease: "power2.out"
    });

    // GSAP animation for sections
    gsap.from("#tech-stack", {
      scrollTrigger: "#tech-stack",
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  }

}
