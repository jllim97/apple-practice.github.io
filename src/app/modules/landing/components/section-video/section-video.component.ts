import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {animate, AnimationControls, scroll, ScrollOffset} from "motion"

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
  opacityOne: number = 1;
  opacityTwo: number = 1;
  opacityThree: number = 1;
  isPlaying: boolean = true;
  video: any;

  private observer!: IntersectionObserver;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.animateElement(this.one);
    this.animateElement(this.two);
    this.animateElement(this.three);

  }

  setOpacity(elementTop: number) {

  }

  triggerVideo() {
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

  animateElement(element?: ElementRef) {
    const animationControl: AnimationControls = animate(element?.nativeElement, { opacity: [0, 0.3, 1, 1, 0.3, 0]});
    scroll(animationControl, {
      target: element?.nativeElement,
      offset: ["start end", "end end", "start start", "end start"]
    })
  }

}
