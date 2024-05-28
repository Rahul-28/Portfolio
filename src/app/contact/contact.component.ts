import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the header and paragraph
    gsap.from(".mx-4 h1, .mx-4 p", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".mx-4",
        start: "top 80%",
      }
    });

    // Animate the list items
    gsap.from(".list-items", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".mx-4 ul",
        start: "top 80%",
      }
    });

    // Animate the image
    gsap.from(".contact-image", {
      opacity: 0,
      x: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".contact-image",
        start: "top 80%",
      }
    });
  }
}
