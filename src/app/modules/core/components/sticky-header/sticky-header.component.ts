import {AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss']
})
export class StickyHeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() isNav: boolean = true;
  isChevronTriggered: boolean = false;
  destroy$: Subject<void> = new Subject();

  constructor(private renderer: Renderer2) {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

  triggerChevron() {
    this.isChevronTriggered = !this.isChevronTriggered;
    if(this.isChevronTriggered) {
      setTimeout(() => {
        this.triggerSubscription()
      }, 2000)
      return
    }

    this.destroy$.next();

  }

  ngAfterViewInit(): void {

  }

  triggerSubscription() {
    fromEvent(window, 'scroll').pipe(
      takeUntil(this.destroy$)
    ).subscribe((e: Event) => {
      if (this.isChevronTriggered) {
        this.isChevronTriggered = false;
        this.destroySubscription();
      }
    })
  }

  destroySubscription() {
    this.destroy$.next();
  }


}
