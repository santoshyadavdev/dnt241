import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Photos } from './photos';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  jwtHeaders = new HttpHeaders().set('jwt', 'dgfdghkjh').set('userid', '1');

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      headers: this.jwtHeaders
    });
  }

  addPost(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post, {
      headers: this.jwtHeaders
    });
  }

  updatePost(post: Post) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }

  deletePost(post: Post) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
      headers: this.jwtHeaders
    });

    return this.http.request<Photos[]>(request);
  }
}
