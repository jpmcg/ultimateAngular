import  { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
  <div>
    <h2>Airline Passengers</h2>
    <div>Passenger Count: {{ items.length }}</div>
    <div>Checked In: {{ checkedInCount() }}
  </div>
  `
})

export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  checkedInCount(): number {
    if(!this.items) return;
    return this.items.filter(item => item.checkedIn).length;
  }
}
