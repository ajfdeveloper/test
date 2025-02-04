import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CommitteeMembersComponent } from './components/committee-members/committee-members.component';
import { DirectorComponent } from './components/director/director.component';

export const routes: Routes = [

    {
        path: '', 
        component: HomePageComponent
    },
    {
        path: 'about-us', 
        component: AboutUsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'committee-members',
        component: CommitteeMembersComponent
    },
    {
        path: 'director',
        component: DirectorComponent
    }

];
