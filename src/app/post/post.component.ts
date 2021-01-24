import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Post } from './service/post';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  postList: Post[];

  posts$: Observable<Post[]>;

  subscripion: Subscription;

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.data.subscribe((res)=> this.postList = res['postList']);
    // this.subscripion = this.postService.getPosts().subscribe((res) => this.postList = res);
    this.posts$ = this.postService.getPosts();

  }

  addNewPost(post: Post) {
    this.postService.addPost(post).subscribe(res => console.log(res));
  }

  updatePost() {
    this.postService.updatePost({
      body: 'tets',
      title: 'test title',
      userId: 2,
      id: 1
    }).subscribe(res => console.log(res));
  }

  deletePost() {
    this.postService.deletePost({
      body: 'tets',
      title: 'test title',
      userId: 2,
      id: 1
    }).subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    // console.log('this is ondestroy');
    // if (this.subscripion) {
    //   this.subscripion.unsubscribe();
    // }
  }

}
