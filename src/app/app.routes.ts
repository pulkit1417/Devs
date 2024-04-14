import { Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path:'team',component:TeamComponent},
    {path:'services',component:ServicesComponent},
    {path:'works',component:WorksComponent},
    {path:'contact',component:ContactComponent},
    {path:'reviews',component:ReviewsComponent},
    {path:'',component:HomeComponent},
    {path:'',component:HeaderComponent}
];
