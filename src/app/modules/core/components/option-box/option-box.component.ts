import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-option-box',
  templateUrl: './option-box.component.html',
  styleUrls: ['./option-box.component.scss']
})
export class OptionBoxComponent implements OnInit {
  @Input() image: string = 'shipping'
  @Input() title: string = 'Free Delivery'
  @Input() description: string = ''
  @Input() link: string = 'Learn more';
  @Input() linkTitle: string = 'Learn more';
  constructor() { }

  ngOnInit(): void {
  }

}
