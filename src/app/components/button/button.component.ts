import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Input() fColor: string | undefined;
  @Output() btnClicked = new EventEmitter()

  onClick() {
    this.btnClicked.emit()
    console.log("lmao")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
