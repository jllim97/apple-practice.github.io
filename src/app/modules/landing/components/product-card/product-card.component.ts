import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() imageName: string = 'ipad-pro';
  @Input() colorOptions: string = 'ipad-pro';
  @Input() isNew: boolean = true;
  @Input() generation: string = '10th generation';
  @Input() productName: string = 'iPad Pro'
  @Input() description: string = 'The ultimate iPad experience with the most advanced technology.'
  @Input() price: string = 'From RM 3,899';
  @Input() buttonTitle: string = 'View pricing';
  @Input() isHalf: boolean = false;
  @Input() learnMoreVisible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
