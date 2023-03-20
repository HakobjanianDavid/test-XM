import { TestBed } from '@angular/core/testing';
import { PhotoApiService } from 'src/app/core/API/services/photo-api-service/photo-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provider: PhotoApiService, useValue: jasmine.createSpyObj('PhotoApiService', ['getPhotos']) }]
    });
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
