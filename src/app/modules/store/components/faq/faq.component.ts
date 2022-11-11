import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  @ViewChild('header', {static:true}) header?: ElementRef;
  @ViewChild('headerInner', {static: true}) headerInner?: ElementRef;
  @ViewChild('q1', {static: true}) q1?: ElementRef;
  @ViewChild('q1Inner', {static: true}) q1Inner?: ElementRef;
  @ViewChild('q2', {static: true}) q2?: ElementRef;
  @ViewChild('q2Inner', {static: true}) q2Inner?: ElementRef;
  @ViewChild('q3', {static: true}) q3?: ElementRef;
  @ViewChild('q3Inner', {static: true}) q3Inner?: ElementRef;
  isHeaderVisible: boolean = false;
  isQuestionOneVisible: boolean = false;
  isQuestionTwoVisible: boolean = false;
  isQuestionThreeVisible: boolean = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onHeaderClick() {
    this.isHeaderVisible = !this.isHeaderVisible
    const height = this.headerInner?.nativeElement.getBoundingClientRect().height;
    if(this.isHeaderVisible) {
      this.renderer.setStyle(this.header?.nativeElement, 'min-height', `${height}px`)
      setTimeout(() => {
        this.renderer.removeStyle(this.header?.nativeElement, 'height');
      }, 300)
      return;
    }
    this.renderer.setStyle(this.header?.nativeElement, 'height', `0px`)
    this.renderer.setStyle(this.header?.nativeElement, 'min-height', '0px')
  }

  onQuestionClick(questionNumber: number) {
    switch (questionNumber) {
      case 1:
        this.isQuestionOneVisible = !this.isQuestionOneVisible;
        this.changeQuestionStyle(this.isQuestionOneVisible, this.q1Inner, this.q1);
        break;
      case 2:
        this.isQuestionTwoVisible = !this.isQuestionTwoVisible;
        this.changeQuestionStyle(this.isQuestionTwoVisible, this.q2Inner, this.q2);
        break;
      case 3:
        this.isQuestionThreeVisible = !this.isQuestionThreeVisible;
        this.changeQuestionStyle(this.isQuestionThreeVisible, this.q3Inner, this.q3);
        break;
      default:
        break;
    }
  }

  changeQuestionStyle(isQuestionVisible: boolean, questionInnerElement?:ElementRef, questionElement?: ElementRef) {
    const height = questionInnerElement?.nativeElement.getBoundingClientRect().height;
    if(isQuestionVisible) {
      this.renderer.setStyle(questionElement?.nativeElement, 'height', `${height}px`)
      return;
    }

    this.renderer.setStyle(questionElement?.nativeElement, 'height', '0px')
    setTimeout(() => {
      if(this.isHeaderVisible) {
        const height = this.headerInner?.nativeElement.getBoundingClientRect().height;
        this.renderer.setStyle(this.header?.nativeElement, 'min-height', `${height}px`)
      }
    }, 500)

  }
}
