import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-breadcrumbs',
  templateUrl: './footer-breadcrumbs.component.html',
  styleUrls: ['./footer-breadcrumbs.component.scss']
})
export class FooterBreadcrumbsComponent implements OnInit {

  @Input() isStore: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
