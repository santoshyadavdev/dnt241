import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../service/post';
import { PostService } from '../service/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveGuard implements Resolve<Post[]> {

  constructor(private postService: PostService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postService.getPosts();
  }

}
