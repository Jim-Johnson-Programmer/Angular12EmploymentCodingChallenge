import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to /login
  { path: 'login', component: LoginComponent },         // Login page
  { path: 'home', component: HomeComponent },           // Home page
  { path: '**', redirectTo: '/login' }                  // Wildcard redirects to /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
