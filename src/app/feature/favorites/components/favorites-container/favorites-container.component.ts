import { FavoritesStateService } from './../../services/favorites.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPhotoDto } from 'src/app/core/API/models/photo-dto.interface';

@Component({
  selector: 'app-favorites-container',
  templateUrl: './favorites-container.component.html',
  styleUrls: ['./favorites-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesContainerComponent {
  public favorites: IPhotoDto[];

  constructor(private readonly favoriteState: FavoritesStateService) {
    this.favorites = this.favoriteState.favoritePhotos;
  }
}
