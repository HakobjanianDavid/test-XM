import { map } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesStateService } from 'src/app/feature/favorites/services/favorites.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoItemComponent {
  public src!: string;
  private id!: string;

  public isDisable: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private readonly favoriteState: FavoritesStateService) {
    this.activeRoute.params.pipe(map(({ id }) => id))
      .subscribe((itemId) => {
        this.id = itemId;
        this.src = `https://picsum.photos/id/${itemId}/700/700`;
      })
  }

  public removeItem(): void {
    this.isDisable = true;
    this.favoriteState.removeFromFavorite(this.id);
  }
}
