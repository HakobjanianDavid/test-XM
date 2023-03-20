import { FavoritesStateService } from './../../../favorites/services/favorites.service';
import { PhotoService } from './../../services/photo.service';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { IState } from 'src/app/core/models/state.interface';
import { IPhotoDto } from 'src/app/core/API/models/photo-dto.interface';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoContainerComponent implements OnDestroy{
  public photos!: Observable<IState<IPhotoDto[] | null>>;
  public photoHeight = 250;

  constructor(
    private readonly photoService: PhotoService,
    private readonly favoriteState: FavoritesStateService,
  ) {
    this.initPhotos();
  }

  ngOnDestroy(): void {
    this.photoService.destroy$.next(null);
    this.photoService.destroy$.complete();
  }

  public downloadPhotos(): void {
    this.photoService.getNextPhotos();
  }

  public addToFavorite(photo: IPhotoDto): void {
    this.favoriteState.addToFavorite(photo)
  }

  private initPhotos(): void {
    const rows = Math.floor(document.body.scrollHeight / (this.photoHeight*2));

    this.photos = this.photoService.photos$;
    this.photoService.getInitialPhotos(rows);
  }
}
