import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { SectionsComponent } from '../pages/sections/sections.component';
import { ChallengesComponent } from '../pages/challenges/challenges.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { RewardComponent } from '../pages/reward/reward.component';
import { AccountComponent } from '../pages/account/account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, LoginComponent, SectionsComponent, ChallengesComponent, ProgressComponent, RewardComponent, AccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tablet';
}
