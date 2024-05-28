import { AfterViewInit, Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';
  showResume = false;
  isMenuOpen = false;

  ngAfterViewInit(): void {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleResume() {
    this.showResume = !this.showResume;
    this.isMenuOpen = !this.isMenuOpen;
  }
}
