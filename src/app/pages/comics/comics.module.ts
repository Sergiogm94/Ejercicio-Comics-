import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';


@NgModule({
  declarations: [
    ComicsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
