import { AfterViewInit, Directive, EventEmitter, Input, NgZone, Output, OnDestroy } from '@angular/core';
import { filter, fromEvent, Subject } from 'rxjs';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements AfterViewInit, OnDestroy {
  private _canLoad!: boolean;
  private destroy$ = new Subject<null>();

  get canLoad(): boolean {
    return this._canLoad;
  }

  @Input() set canLoad(value: boolean) {
    this._canLoad = value
  }

  @Output() scrolled = new EventEmitter<null>();

  constructor(private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.setup()
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  setup(): void {
    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'scroll').pipe(
        filter(() => 
          (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 200 && this._canLoad
        ),
      ).subscribe(() => this.handleScroll())
    })
  }

  handleScroll(): void {
    this.zone.run(() => this.scrolled.emit())
  }
}
