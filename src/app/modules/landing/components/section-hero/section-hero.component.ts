import {AfterViewInit, Component, OnInit} from '@angular/core';
import {
  animate,
  AnimationEvent,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('invisible-above', style({
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 17.75, 1, 1)',
        opacity: 0

      })),
      state('visible-above', style({
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1)',
        opacity: 1
      })),
      state('invisible-below', style({
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -17.75, 1, 1)',
        opacity: 0

      })),
      state('visible-below', style({
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1)',
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0

      })),
      state('visible', style({
        opacity: 1
      })),
      transition('invisible => visible', [
        animate('0.2s')
      ]),
      transition('invisible-below => visible', [
        animate('0.1s')
      ]),
      transition('invisible-above => visible', [
        animate('0.1s')
      ])
    ]),
    trigger('flyDownUp', [
      transition(':enter', [
        animate('750ms 0.3s ease-in', keyframes([
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 30)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 30)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
        ]))
      ])
    ]),
    trigger('flyUpDown', [
      transition(':enter', [
        animate('750ms 0.3s ease-in', keyframes([
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -30)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -55)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -30)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
        ]))
      ])
    ]),
    trigger('flyDownUp-small', [
      transition(':enter', [
        animate('750ms 0.3s ease-in', keyframes([
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 16)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 16)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
        ]))
      ])
    ]),
    trigger('flyDownUp-medium', [
      transition(':enter', [
        animate('750ms 0.3s ease-in', keyframes([
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 26)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 40.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 40.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 40.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 40.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 40.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 40.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 26)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
        ]))
      ])
    ]),
    trigger('flyUpDown-small', [
      transition(':enter', [
        animate('750ms 0.3s ease-in', keyframes([
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -16)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -28.3724)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -16)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
        ]))
      ])
    ]),
    trigger('flyUpDown-medium', [
      transition(':enter', [
        animate('750ms 0.3s ease-in', keyframes([
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -26)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -44.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -44.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -44.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -44.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -44.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -44.2)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, -26)'}),
          style({transform: 'matrix(1, 0, 0, 1, 0, 0)'}),
        ]))
      ])
    ]),

  ]
})
export class SectionHeroComponent implements OnInit, AfterViewInit {

  value: number = 0;
  hideAnimationTitle: boolean = false;
  hideTitle: boolean = true;
  isReady = false;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.isReady = true;
  }

  ngOnInit(): void {
    // this.incrementTimer();
  }

  triggerTitle(state: AnimationEvent) {
    this.hideAnimationTitle = true;
    this.hideTitle = false;
  }

  incrementTimer() {
    const interval = setInterval(() => {
      this.value += 4;
      if (this.value >= 55) {
        clearInterval(interval)
        setTimeout(() => {
          this.decrementTimer();
        }, 300)
      }
    }, 20)
  }

  decrementTimer() {
    const interval = setInterval(() => {
      this.value -= 4;
      if (this.value <= 0) {
        this.value = 0;
        clearInterval(interval)
        setTimeout(() => {
          this.hideAnimationTitle = true;
          this.hideTitle = false;
        }, 50)

      }
    }, 10)
  }

  clearInterval() {

  }

}
