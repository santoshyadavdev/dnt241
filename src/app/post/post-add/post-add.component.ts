import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../service/post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  post: Post = {
    userId: 0,
    body: '',
    title: ''
  }

  selectedOption ='';

  options = ['new user', 'old user'];

  @Output() addPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitPost() {
    this.addPost.emit(this.post);
  }

}
