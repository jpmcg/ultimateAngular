import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
  <passenger-count></passenger-count>
  <passenger-detail></passenger-detail>
  <h2>Airline Passengers</h2>
  <div>
    <ul>
      <li *ngFor='let p of passengers; let i = index'>
        <span class='status' [class.checked-in]='p.checkedIn'></span>
        <span>{{ i }} :  {{ p.name }}</span>
        <div class="date">
          Check-In Date: {{ p.checkedIn ?  (p.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not Checked In' }}
        </div>
        <div class="children">
          Children: {{ p.children?.length || 0 }}
        </div>
      </li>
    </ul>
  </div>
  `
  })
  export class PassengerDashboardComponent implements OnInit {

    passengers: Passenger[] = [];

    ngOnInit() {
      this.passengers = [
        {
          id: 1,
          name: 'John',
          checkedIn: true,
          checkedInDate: 1490742000000,
          children: [{ name: 'Adam', age: 1}]
        },
        {
          id: 2,
          name: 'Ciara',
          checkedIn: false,
          checkedInDate: null,
          children: []
        },
        {
          id: 3,
          name: 'Aidan',
          checkedIn: true,
          checkedInDate: 1490742000000,
          children: null
        }
      ];
    }

  }
