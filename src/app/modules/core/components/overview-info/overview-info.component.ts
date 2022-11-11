import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview-info',
  templateUrl: './overview-info.component.html',
  styleUrls: ['./overview-info.component.scss']
})
export class OverviewInfoComponent implements OnInit {

  @Input() isStore: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
