import { Component, OnInit } from '@angular/core';
import { Post } from './service/post';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => this.postList = res);
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

}
