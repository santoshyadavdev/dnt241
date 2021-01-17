import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'department', component: DepartmentComponent,  canActivate: [AuthGuard] },
  {
    path: 'post',
    canLoad: [AuthGuard],
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
