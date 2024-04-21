import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, WorksComponent, PdfViewerModule, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
  showResume = false;
}
