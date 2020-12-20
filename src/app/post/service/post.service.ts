import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost(post: Post) {

  }

  deletePost(post: Post) {

  }
}