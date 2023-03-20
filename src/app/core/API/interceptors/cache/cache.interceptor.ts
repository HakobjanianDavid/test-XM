import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { CacheService } from '../../services/cache-service/cache-service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private readonly cacheService: CacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const cachedResponse = this.cacheService.getFromCache(req);

    if (cachedResponse) {
      return (cachedResponse instanceof Observable) ? cachedResponse : of(cachedResponse.clone());
    }

    return next.handle(req)
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.cacheService.addToCache(req, event);
          }
        })
      );
  }
}
