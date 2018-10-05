import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard-service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <passenger-form
      [passenger]="passenger"
      (update)="onUpdatePassenger($event)"></passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit{
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.passengerService.getPassenger(1)
      .subscribe((passenger: Passenger) => this.passenger = passenger);
  }

  onUpdatePassenger(passenger: Passenger){
    console.log(passenger);
    this.passengerService.updatePassengers(passenger)
      .subscribe((response: Passenger) =>{
        this.passenger = Object.assign({}, this.passenger, passenger);
      });
  }

}
