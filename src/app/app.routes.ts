import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { ChallengesComponent } from '../pages/challenges/challenges.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { RewardComponent } from '../pages/reward/reward.component';
import { SectionsComponent } from '../pages/sections/sections.component';
import { AccountComponent } from '../pages/account/account.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sections', component: SectionsComponent},
    {path: 'challenges', component: ChallengesComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'reward', component: RewardComponent},
    {path: 'account', component: AccountComponent},
];
