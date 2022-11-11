import {Component, Input, OnInit} from '@angular/core';

export interface ProductModel {
  imageName: string;
  colorOptions: string;
  isNew: boolean;
  generation: string;
  productName: string;
  description: string;
  price: string;
  buttonTitle: string;
}
@Component({
  selector: 'app-right-for-you',
  templateUrl: './right-for-you.component.html',
  styleUrls: ['./right-for-you.component.scss']
})
export class RightForYouComponent implements OnInit {
  @Input() isStore: boolean = false;
  products: Array<ProductModel> = [
    {
      imageName: 'ipad-pro',
      colorOptions: 'ipad-pro',
      isNew: true,
      price: 'From RM 3,899',
      productName: 'iPad Pro',
      generation: '',
      description: 'The ultimate iPad experience with the most advanced technology.',
      buttonTitle: 'View pricing'
    },
    {
      imageName: 'ipad-air',
      colorOptions: 'ipad-air',
      isNew: false,
      price: 'From RM 2,899',
      productName: 'iPad Air',
      generation: '',
      description: 'Serious performance in a thin and light design.',
      buttonTitle: 'Buy'
    },
    {
      imageName: 'ipad',
      colorOptions: 'ipad',
      isNew: true,
      price: 'From RM 2,099',
      productName: 'iPad',
      generation: '10th generation',
      description: 'The all-new colourful iPad for the things you do every day.',
      buttonTitle: 'View pricing'
    },
    {
      imageName: 'ipad-9',
      colorOptions: 'ipad-9',
      isNew: false,
      price: 'From RM 1,599',
      productName: 'iPad',
      generation: '9th generation',
      description: 'All the essentials in the most affordable iPad.',
      buttonTitle: 'Buy'
    },
    {
      imageName: 'ipad-mini',
      colorOptions: 'ipad-mini',
      isNew: false,
      price: 'From RM 2,399',
      productName: 'iPad mini',
      generation: '',
      description: 'The full iPad experience designed to fit in one hand',
      buttonTitle: 'Buy',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
