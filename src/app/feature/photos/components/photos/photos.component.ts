import { IPhotoDto } from './../../../../core/API/models/photo-dto.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent {
  private _photos: IPhotoDto[] = [];

  @Input() photoSize: number = 0;

  @Input() set photos(value: IPhotoDto[]) {
    if(value && value.length) {
      this._photos = [...this._photos, ...value];
    }
  }
  
  get photos(): IPhotoDto[] {
    return this._photos;
  }

  @Output() onPhotoClick = new EventEmitter<IPhotoDto>()

  public tapToPhoto(photo: IPhotoDto): void {
    this.onPhotoClick.emit(photo)
  }
}
