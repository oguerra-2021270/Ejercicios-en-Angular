import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    
  <h2>{{"Hello " + name}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class TestComponent {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey Ostyn');
  }


}
