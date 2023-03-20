import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { IPhotoDto } from '../../models/photo-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {

  constructor(private readonly http: HttpClient) { }

  public getPhotos({ page }: { page: number }): Observable<IPhotoDto[]> {
    return this.http.get<IPhotoDto[]>(`https://picsum.photos/v2/list?page=${page}&limit=6`)
      .pipe(delay(300))
  }
}
