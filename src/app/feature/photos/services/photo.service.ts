
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { IPhotoDto } from 'src/app/core/API/models/photo-dto.interface';
import { PhotoApiService } from 'src/app/core/API/services/photo-api-service/photo-api.service';
import { IState, state } from 'src/app/core/models/state.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos$ = new BehaviorSubject<IState<IPhotoDto[] | null>>({ state: state.LOADING, value: null });
  public destroy$ = new Subject();

  private page = 0;

  constructor(private readonly photoApi: PhotoApiService) { }

  public getNextPhotos(): void {
    const page = ++this.page;
    this.setPhotoSubj({ value: null, state: state.LOADING })

    this.photoApi.getPhotos({ page })
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => this.setPhotoSubj({ value, state: state.LOADED }));
  }

  public getInitialPhotos(count = 4): void {
    this.page = 0;
    const obs$ = Array.from({ length: count }, (v, i) => ++i)
      .map((page) => this.photoApi.getPhotos({ page }));

    this.setPhotoSubj({ value: null, state: state.LOADING })

    from(obs$)
      .pipe(
        tap(() => this.page++),
        mergeMap((v) => v),
        takeUntil(this.destroy$),
      )
      .subscribe((value) => this.setPhotoSubj({ value, state: state.LOADED }));
  }

  private setPhotoSubj(
    { value, state }: IState<null | IPhotoDto[]>
  ): void {
    this.photos$.next({
      state,
      value,
    })
  }
}
