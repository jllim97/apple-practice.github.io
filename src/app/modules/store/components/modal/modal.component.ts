import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() isClosed = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.isVisible = false;
    this.isClosed.emit(true);
  }

}
