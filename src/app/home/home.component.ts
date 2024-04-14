import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamComponent } from '../team/team.component';
import { ServicesComponent } from '../services/services.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { WorksComponent } from '../works/works.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
