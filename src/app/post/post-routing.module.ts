import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PostGuard } from './guards/post.guard';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: '', component: PostComponent, canActivate: [AuthGuard],
    canActivateChild: [PostGuard],
    children: [
      { path: ':id', component: PostDetailsComponent }
    ]
  },
  // { path: ':id', component : PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
