import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'works', component: WorksComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: ''} // 404 route
];
