import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesContainerComponent } from './components/favorites-container/favorites-container.component';

const routes: Routes = [
  { path: '', component: FavoritesContainerComponent },
];

@NgModule({
  declarations: [
    FavoritesContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavoritesModule { }
