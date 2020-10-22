import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Output() click = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  _click(e)
  {
    this.click.emit(e);
  }
}
