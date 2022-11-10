import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-options-collapse',
  templateUrl: './options-collapse.component.html',
  styleUrls: ['./options-collapse.component.scss']
})
export class OptionsCollapseComponent implements OnInit, AfterViewInit {

  private _isCollapse = false;
  @ViewChild('heightWrapper') heightWrapper?: ElementRef;
  @ViewChild('collapseContent') collapseContent?: ElementRef;
  @ViewChild('wrapper') wrapper?: ElementRef;
  @Input() legend: string = 'Finish';
  @Input() selectedOption: string | TemplateRef<void>= 'Blue';
  @Input() categories: string = 'Finish';
  @Output() fadeHeaderClicked = new EventEmitter<string>();

  public get isCollapsed() {
    return this._isCollapse;
  }

  @Input()
  set isCollapsed(isCollapse: boolean) {
    this._isCollapse = isCollapse;
    if(this._isCollapse) {
      this.renderer.setStyle(this.heightWrapper?.nativeElement, 'height', `0px`);
      if(this.wrapper) {
        // const y = this.wrapper.nativeElement.getBoundingClientRect().top + window.scrollY + 42;
        // window.scroll({
        //   top: y,
        //   behavior: 'smooth'
        // })
      }

    } else {
     this.setHeight();

    }
  }

  @Input() isStorage: boolean = false;
  @Input() isFirst: boolean = false;
  @Input() isDisable: boolean = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onFadeHeaderClicked() {
    // this.isCollapsed = !this.isCollapsed;
    this.fadeHeaderClicked.emit(this.categories);
  }

  ngAfterViewInit(): void {
    this.setHeight();
  }

  setHeight(customHeight?: number) {
    if(this.collapseContent) {
      const contentBounding = this.collapseContent.nativeElement.getBoundingClientRect();
      const {height} = contentBounding;
      console.log(height)
      this.renderer.setStyle(this.heightWrapper?.nativeElement, 'height', `${customHeight ? customHeight+height : height}px`);
    }
  }
}
