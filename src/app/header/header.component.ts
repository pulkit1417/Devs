import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,TeamComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
