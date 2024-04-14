import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamComponent } from '../team/team.component';
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { WorksComponent } from '../works/works.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,TeamComponent,HomeComponent,ServicesComponent,ContactComponent,ReviewsComponent,WorksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
