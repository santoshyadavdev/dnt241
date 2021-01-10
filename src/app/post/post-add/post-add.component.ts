import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  submitDate: Date;

  selectedOption ='';

  options = ['new user', 'old user'];

  @Output() addPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitPost(postForm: NgForm) {
    this.addPost.emit(this.post);
    postForm.resetForm();
  }

}
