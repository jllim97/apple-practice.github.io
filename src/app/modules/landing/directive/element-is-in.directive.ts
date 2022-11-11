import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {async, delay, filter, fromEvent, Subject, takeUntil} from "rxjs";

@Directive({
  selector: '[appElementIsIn]'
})
export class ElementIsInDirective implements OnInit, AfterViewInit, OnDestroy{
  @Input() intersectionDebounce = 0;
  @Input() intersectionRootMargin = '0px';
  @Input() intersectionRoot?: HTMLElement;
  @Input() intersectionThreshold: number | number[] = 1;
  @Output() visibilityChanged = new EventEmitter<HTMLElement>;
  @Output() isInsideViewport = new EventEmitter<void>;

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{entry: IntersectionObserverEntry; observer: IntersectionObserver}>()
  destroy$: Subject<void> = new Subject();
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.createObserver()
  }
  ngAfterViewInit(): void {
    this.startObserving()
    // const element = this.el.nativeElement;
    // fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$)).subscribe(_ => {
    //   let bounding = element.getBoundingClientRect();
    //   if(bounding.top >= 0 && bounding.left >=0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    //     console.log('is in');
    //     this.isInsideViewport.emit();
    //     this.destroy$.next();
    //     this.destroy$.complete();
    //   }
    //
    //
    // })
  }

  private createObserver = () => {
    const options = {
      rootMargin: '0px',
      threshold: this.intersectionThreshold
    };
    const isIntersecting = (entry: IntersectionObserverEntry) => entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(isIntersecting(entry)) {
          this.subject$.next({entry, observer});
        }
      })
    }, options)
  }

  private isVisible(element: HTMLElement) {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio === 1);
        observer.disconnect()
      });
      observer.observe(element);
    })
  }

  private startObserving() {
    if(!this.observer) {
      return;
    }

    this.observer.observe(this.el.nativeElement);

    this.subject$.pipe(delay(this.intersectionDebounce), filter(Boolean))
      .subscribe(async({entry, observer}) => {

        const target = entry.target as HTMLElement;
        const isStillVisible = await this.isVisible(target);
        if(isStillVisible) {
          this.visibilityChanged.emit(target)
          // observer.unobserve(target);
        }
      })
  }

  ngOnDestroy(): void {
    if(this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    this.subject$.next({} as {entry: IntersectionObserverEntry; observer: IntersectionObserver} );
    this.subject$.complete();
  }

}
