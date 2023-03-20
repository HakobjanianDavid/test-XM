
import { PhotosComponent } from './components/photos/photos.component';

import { PhotoContainerComponent } from './components/photos-container/photo-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';

const routes: Routes = [
  { path: '', component: PhotoContainerComponent },
  { path: 'photo/:id', component: PhotoItemComponent },
];

@NgModule({
  declarations: [
    PhotosComponent,
    PhotoContainerComponent,
    PhotoItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  exports: [RouterModule]
})
export class PhotosModule { }
