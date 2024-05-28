import { AfterViewInit, Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, SkillsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.registerPlugin(TextPlugin);

    // Animate the title
    gsap.to(".titleName", {
      duration: 3,
      text: "Rahul Rajesh",
      ease: "power2.inOut",
    });

    // Animate the description
    gsap.to(".titledescription", {
      delay: 3,
      duration: 2,
      text: "Web Developer",
      ease: "power2.out",
    });
  }
}
