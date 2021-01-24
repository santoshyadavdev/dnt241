import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PhotosComponent } from './photos/photos.component';
import { PostAddComponent } from './post-add/post-add.component';
import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DntCoreModule } from 'dnt-core';
import { CustomValidatorDirective } from './directives/custom-validator.directive';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PhotosComponent,
    PostAddComponent,
    PostDetailsComponent,
    CustomValidatorDirective,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    DntCoreModule
  ]
})
export class PostModule { }
