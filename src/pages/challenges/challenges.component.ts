import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LayoutComponent } from "../../components/layout/layout.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [HeaderComponent, LayoutComponent],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css'
})
export class ChallengesComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/progress']);
  }

}
