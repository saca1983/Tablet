import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [HeaderComponent, LayoutComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/reward']);
  }

}
