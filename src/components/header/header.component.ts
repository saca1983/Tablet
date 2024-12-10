import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/challenges']);
  }

  onLogin2() {
    this.router.navigate(['/progress']);
  }

  onLogin3() {
    this.router.navigate(['/reward']);
  }

}
