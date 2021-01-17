import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../service/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails: Post;

  constructor(private route: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) =>
      this.postService.getPostById(+res.get('id')).subscribe((res) => this.postDetails = res));
  }

}
