import {Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-in-the-box',
  templateUrl: './in-the-box.component.html',
  styleUrls: ['./in-the-box.component.scss']
})
export class InTheBoxComponent implements OnInit {
  @ViewChild('galleryContainer', {static: true}) galleryContainer?: ElementRef;
  @ViewChild('galleryImageWrapper', {static: true}) galleryImageWrapper?: ElementRef;
  @ViewChild('img2', {static: true}) img2?: ElementRef;
  currentIndex: number = 1;
  currentLeft: number = 0;

  constructor(private renderer: Renderer2) {
  }

  onImageSelected(index: number) {
    const previousIndex = this.currentIndex;
    this.currentIndex = index;
    const diff = previousIndex - this.currentIndex;
    this.currentLeft = 100 * (diff);
    // this.img2?.nativeElement.scrollIntoView({inline:'center', behavior:'smooth'})
    const bounding = this.galleryImageWrapper?.nativeElement.getBoundingClientRect();


    switch (index) {
      case 1:
        this.setStyle(200, 0);
        break;
      case 2:
        this.setStyle(300, -100);
        break;
      case 3:
        this.setStyle(200, -100);
        break;
      default:
        break;
    }

  }

  setStyle(width: number, left: number) {
    this.renderer.setStyle(this.galleryContainer?.nativeElement, 'width', `${width}%`);
    this.renderer.setStyle(this.galleryContainer?.nativeElement, 'left', `${left}%`);

  }

  ngOnInit(): void {
  }

}
