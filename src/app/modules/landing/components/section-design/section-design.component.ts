import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-section-design',
  templateUrl: './section-design.component.html',
  styleUrls: ['./section-design.component.scss']
})
export class SectionDesignComponent implements OnInit, AfterViewInit {
  @ViewChild('videoOne', {static:true}) videoOne?: ElementRef;
  @ViewChild('videoTwo', {static:true}) videoTwo?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let v1 = this.videoOne?.nativeElement
    v1.muted = true;
    let v2 = this.videoTwo?.nativeElement;
    v2.muted = true;
  }

  onVideoOneIn(event: HTMLElement) {
    console.log(event);
    let v1 = this.videoOne?.nativeElement;
    v1.play();
  }

  onVideoTwoIn(event: HTMLElement) {
    let v2 = this.videoTwo?.nativeElement;
    v2.play();
  }

}
