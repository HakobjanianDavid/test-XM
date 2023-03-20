import { IPhotoDto } from './../../../core/API/models/photo-dto.interface';
import { Injectable } from '@angular/core';

export const LOCAL_STORAGE_KEY = 'favorite_photo';

@Injectable({
  providedIn: 'root'
})
export class FavoritesStateService {
  public favoritePhotos: IPhotoDto[] = [];
  private savedPhotos: IPhotoDto[] = [];

  constructor() {
    this.savedPhotos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');

    if(this.savedPhotos.length) {
      this.favoritePhotos = this.savedPhotos;
    }
  }

  public addToFavorite(photo: IPhotoDto): void {
    const hasPhoto = this.favoritePhotos.some(({ id }: IPhotoDto) => id === photo.id);

    if(!hasPhoto) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...this.savedPhotos, photo]))
      this.favoritePhotos.push(photo);
    }
  }

  public removeFromFavorite(id: string): void{
    const index = this.favoritePhotos.findIndex((item: IPhotoDto) => item.id === id);

    if(index !== -1) {
      this.favoritePhotos.splice(index, 1);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...this.favoritePhotos]))
    }
  }
}
