import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { LayoutComponent } from "../../components/layout/layout.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/challenges']);
  }

}
