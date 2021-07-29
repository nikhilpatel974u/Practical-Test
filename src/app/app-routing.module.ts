import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-blog', component: CreateBlogComponent },
  { path: '', redirectTo: 'signup', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
