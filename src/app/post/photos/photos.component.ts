import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photos } from '../service/photos';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  total = 0;
  photos: Photos[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Your request is sent to the server');
          break;
        }
        case HttpEventType.ResponseHeader: {
          if (event.status === 200) {
            console.log('You request is being processed');
          }
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.total += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          if (event.status === 200) this.photos = event.body;
        }
      }
    });
  }

}
