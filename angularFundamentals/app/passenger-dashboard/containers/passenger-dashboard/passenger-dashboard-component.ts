import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <p *ngFor="let p of passengers">{{ p.name }}</p>

    <passenger-count [items]="passengers"></passenger-count>
    <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
    </passenger-detail>

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

    handleEdit(event: Passenger) {
      console.log(event);
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if(passenger.id == event.id) {
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    }

    handleRemove(event: Passenger) {
      console.log(event);
      this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id != event.id);
    }

  }
