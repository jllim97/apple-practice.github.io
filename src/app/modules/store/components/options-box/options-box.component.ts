import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-options-box',
  templateUrl: './options-box.component.html',
  styleUrls: ['./options-box.component.scss']
})
export class OptionsBoxComponent implements OnInit {

  @Input() id?: number;
  @Input() option: string = '';
  @Input() title: string = '';
  @Input() isSelected: boolean = false;
  @Input() autoUpdateStatus: boolean = true;
  @Input() isColor: boolean = false;
  @Input() isSpecs: boolean = false;
  @Input() color: string = 'blue';
  @Input() isCustom: boolean = false;
  @Input() isRing: boolean = false;
  @Output() onClicked: EventEmitter<{option: string, title: string, id?: number}> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    if(this.autoUpdateStatus) {
      this.isSelected = true;
    }
    this.onClicked.emit({
      id: this.id,
      option: this.option,
      title: this.title
    })
  }

}
