import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @ViewChild('galleryContainer', {static: true}) galleryContainer?: ElementRef;
  @ViewChild('item1', {static: true}) itemOne?: ElementRef;
  @ViewChild('item2', {static: true}) itemTwo?: ElementRef;
  @ViewChild('item3', {static: true}) itemThree?: ElementRef;
  @ViewChild('item4', {static: true}) itemFour?: ElementRef;
  @ViewChild('item5', {static: true}) itemFive?: ElementRef;
  isZoom: boolean = false;
  isOverlayed: boolean = false;
  currentIndex: number = 0;
  isReady: boolean = false;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  onImageClick(index:number) {
    this.currentIndex = index;
    this.isZoom = true;
    this.addEnlargeStyle();
    setTimeout(() => {
      this.scrollElementIntoView();
    }, 500)
    setTimeout(() => {
      this.isReady = true;
    }, 1000)

  }

  triggerOverlay() {
    this.isOverlayed = true
  }

  closeZoom() {
    this.isZoom = false;
    this.removeEnlargeStyle();
    this.isReady = false;
  }

  removeEnlargeStyle() {
    if (this.galleryContainer) {
      this.renderer.removeStyle(this.galleryContainer.nativeElement, 'top');
      this.renderer.removeStyle(this.galleryContainer.nativeElement, 'left');
      this.renderer.removeStyle(this.galleryContainer.nativeElement, 'height')
      this.renderer.removeStyle(this.galleryContainer.nativeElement, 'width')
    }
  }

  addEnlargeStyle() {
    if (this.galleryContainer) {
      const bounding = this.galleryContainer.nativeElement.getBoundingClientRect();
      console.log(bounding);
      this.renderer.setStyle(this.galleryContainer.nativeElement, 'top', `${-bounding.top}px`);
      if(document.documentElement.clientWidth <= 946) {
        this.renderer.setStyle(this.galleryContainer.nativeElement, 'left', `0px`);
      } else {
        this.renderer.setStyle(this.galleryContainer.nativeElement, 'left', `${-bounding.left - 8}px`);
      }
      this.renderer.setStyle(this.galleryContainer.nativeElement, 'height', `${document.documentElement.clientHeight}px`)
      this.renderer.setStyle(this.galleryContainer.nativeElement, 'width', `${document.documentElement.clientWidth + 8}px`)
    }
  }

  scrollElementIntoView() {
    const option:ScrollIntoViewOptions = {behavior:'smooth', block:'center', inline:'center'};
    switch(this.currentIndex) {
      case 0:
        this.itemOne?.nativeElement.scrollIntoView(option);
        break;
      case 1:
        this.itemTwo?.nativeElement.scrollIntoView(option);
        break;
      case 2:
        this.itemThree?.nativeElement.scrollIntoView(option);
        break;
      case 3:
        this.itemFour?.nativeElement.scrollIntoView(option);
        break;
      case 4:
        this.itemFive?.nativeElement.scrollIntoView(option);
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.observeScrolling()
    }, 500)
  }

  prev() {
    this.currentIndex -= 1;
    this.scrollElementIntoView();
  }

  next() {
    this.currentIndex += 1;
    this.scrollElementIntoView();
  }

  observeScrolling() {
    const currentScroll = window.scrollY;
    fromEvent(window,'scroll').pipe(takeUntil(this.destroy$))
      .subscribe(_ => {
        if(window.scrollY !== currentScroll) {
          this.closeZoom();
          this.destroy$.next();
        }
      })
  }
}
