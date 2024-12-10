import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward',
  standalone: true,
  imports: [HeaderComponent, LayoutComponent],
  templateUrl: './reward.component.html',
  styleUrl: './reward.component.css'
})
export class RewardComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/account']);
  }

}
