import { TestBed } from '@angular/core/testing';
import { PHOTO_DTO_MOCK } from 'src/app/core/API/mocks/photo-dto.mock';
import { IPhotoDto } from 'src/app/core/API/models/photo-dto.interface';

import { FavoritesStateService, LOCAL_STORAGE_KEY } from './favorites.service';

describe('FavoritesStateService', () => {
  let service: FavoritesStateService;
  const newItem: IPhotoDto = { ...PHOTO_DTO_MOCK, id: '2' };

  beforeEach(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([PHOTO_DTO_MOCK]))
    service = TestBed.inject(FavoritesStateService);
  });

  afterEach(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fill favoritePhotos from localStorage', () => {
    expect(service.favoritePhotos).toEqual([PHOTO_DTO_MOCK]);
  });

  describe('#addToFavorite', () => {

    it('should add new item to favoritePhotos', () => {
      service.addToFavorite(newItem);
  
      expect(service.favoritePhotos).toEqual([PHOTO_DTO_MOCK, newItem]);
    });
  
    it('should add new item to localStorage', () => {
      service.addToFavorite(newItem);
  
      expect(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)).toEqual([PHOTO_DTO_MOCK, newItem]);
    });

    it('should not add item to favoritePhotos if favoritePhotos has that item', () => {
      service.addToFavorite(PHOTO_DTO_MOCK);
  
      expect(service.favoritePhotos).toEqual([PHOTO_DTO_MOCK]);
    });
  
    it('should not add item to localStorage if favoritePhotos has that item', () => {
      service.addToFavorite(PHOTO_DTO_MOCK);
  
      expect(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)).toEqual([PHOTO_DTO_MOCK]);
    });
  })

  describe('#removeFromFavorite', () => {

    it('should remove item from favoritePhotos', () => {
      service.removeFromFavorite(PHOTO_DTO_MOCK.id);
  
      expect(service.favoritePhotos).toEqual([]);
    });
  
    it('should remove item from localStorage', () => {
      service.removeFromFavorite(PHOTO_DTO_MOCK.id);
  
      expect(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)).toEqual([]);
    });

    it('should do nothing if favoritePhotos does not contain item', () => {
      service.removeFromFavorite(newItem.id);
  
      expect(service.favoritePhotos).toEqual([PHOTO_DTO_MOCK]);
      expect(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)).toEqual([PHOTO_DTO_MOCK]);
    });
  })

});
