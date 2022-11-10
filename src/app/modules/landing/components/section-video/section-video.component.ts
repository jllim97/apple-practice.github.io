import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-section-video',
  templateUrl: './section-video.component.html',
  styleUrls: ['./section-video.component.scss']
})
export class SectionVideoComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('ipadVideo', {static: true}) ipadVideo?: ElementRef;
  @ViewChild('one', {static: true}) one?: ElementRef;
  @ViewChild('two', {static: true}) two?: ElementRef;
  @ViewChild('three', {static: true}) three?: ElementRef;
  @ViewChild('featureWrapper', {static: true}) featureWrapper?: ElementRef;
  @ViewChild('featureContent', {static: true}) featureContent?: ElementRef;
  @ViewChild('videoButton', {static: true}) videoButton?: ElementRef;
  @ViewChild('buttonContainer', {static: true}) buttonContainer?: ElementRef;
  @ViewChild('sectionVideo', {static: true}) sectionVideo?: ElementRef;
  isPlaying: boolean = true;
  video: any;

  private observer!: IntersectionObserver;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.renderer.setStyle(this.one?.nativeElement, 'opacity', 0);
    fromEvent(window, 'scroll').subscribe(_ => {
      const buttonContainerTop = this.buttonContainer?.nativeElement.getBoundingClientRect().top;
      const featureWrapperTop = this.featureWrapper?.nativeElement.getBoundingClientRect().top;
      console.log('button', this.buttonContainer?.nativeElement.getBoundingClientRect())
      if(featureWrapperTop>= buttonContainerTop) {
        this.renderer.removeClass(this.buttonContainer?.nativeElement, 'visible');
      } else {
        this.renderer.addClass(this.buttonContainer?.nativeElement, 'visible');
      }
      const featureContentTop = this.featureContent?.nativeElement.getBoundingClientRect().top;
      // console.log('screen scroll Top', window.scrollY);
      // console.log('feature content top', featureContentTop)
      const topOfOne = this.one?.nativeElement.getBoundingClientRect().top;
      // console.log(this.one?.nativeElement.getBoundingClientRect())
      // console.log(topOfOne);
      const topOfTwo = this.two?.nativeElement.getBoundingClientRect().top;
      const topOfThree = this.three?.nativeElement.getBoundingClientRect().top;
      if (window.scrollY >= featureContentTop) {
        let opacity = 1 - topOfOne / 100;
        if (opacity >= 1) {
          opacity = 1;
        } else if (opacity <= 0) {
          opacity = 0;
        }
        this.renderer.setStyle(this.one?.nativeElement, 'opacity', opacity);
        this.renderer.setStyle(this.two?.nativeElement, 'opacity', opacity);
        this.renderer.setStyle(this.three?.nativeElement, 'opacity', opacity);
      }
    })
  }

  triggerVideo() {
    console.log('clicked')
    if (this.video) {
      if (this.isPlaying) {
        this.video.pause();
        this.isPlaying = false;
        return;
      }
      this.video.play();
      this.isPlaying = true;

    }
  }

  ngAfterViewChecked(): void {
    this.video = document.getElementById('ipad-video');
    this.video.muted = true;
  }
}
