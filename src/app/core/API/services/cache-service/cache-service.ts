import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  cacheMap = new Map<any, any>(null);

  public getFromCache(req: HttpRequest<any>): HttpResponse<any> | null {
    const url = req.urlWithParams;
    const cached = this.cacheMap.get(url);

    if (!cached) {
      return null;
    }

    return (this.cacheMap.get(url)).response;
  }

  public addToCache(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const entry = { url, response };
    this.cacheMap.set(url, entry);
  }
}
