import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the about content
    gsap.to(".about-content", {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      }
    });

    // Animate the image
    gsap.from(".developerImage", {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".developerImage",
        start: "top 80%",
      }
    });
  }
}
