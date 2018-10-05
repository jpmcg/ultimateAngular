import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <h3>Passenger Form</h3>
    <div>
      {{ passenger | json }}
    </div>
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
    <div>
      Passenger name:
      <input type="text"
              name="name"
              #fullname="ngModel"
              minlength="2"
              required
              [ngModel]="passenger?.name">
      {{ fullname.errors | json }}
      <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
        Passenger name is required
      </div>
      <div *ngIf="fullname.errors?.minlength && fullname.dirty" class="error">
        Passenger name should be 2 chars at least
      </div>
    </div>
      Passenger ID:
      <input type="number"
              name="id"
              required
              #id="ngModel"
              [ngModel]="passenger?.id">
       {{ id.errors | json }}
       <div *ngIf="id.errors?.required && id.dirty" class="error">
       Passenger Id is required
     </div>
      <div>
        <h4>Radio button example</h4>
        <label>
          <input type="radio"
                  [value]="true"
                  name="checkedIn"
                  [ngModel]="passenger?.checkedIn"
                  (ngModelChange)="toggleCheckedInChanged($event)">
                  Yes
        </label>
        <label>
          <input type="radio"
                  [value]="false"
                  name="checkedIn"
                  [ngModel]="passenger?.checkedIn"
                  (ngModelChange)="toggleCheckedInChanged($event)">
                  No
        </label>
        <!--<h4>Checkbox example</h4>
        <label>
          <input type="checkbox"
                  name="checkedIn"
                  [ngModel]="passenger?.checkedIn"
                  (ngModelChange)="toggleCheckedInChanged($event)">
                  Yes
        </label>-->
      </div>
      <div>
        <h4>Luggage</h4>
        <select name="baggage"
            [ngModel]="passenger?.baggage">
          <option *ngFor="let item of baggage"
                  [ngValue]="item.key"
                  [selected]="item.key === passenger?.baggage">
            {{ item.value }}
          </option>
        </select>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number"
                name="checkInDate"
                [ngModel]="passenger?.checkedInDate">
      </div>
      <button type="submit" [disabled]="form.invalid">
        Update
      </button>
      </form>
    <div>
      {{ form.value | json }}
    </div>
    <div>
      Valid:{{ form.valid | json }}
    </div>
    <div>
      Invalid:{{ form.invalid | json }}
    </div>
  `
})
export class PassengerFormComponent {
  @Input()
  passenger: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[]= [{
    key: "none",
    value: "No baggage"
  },
  {
    key: "hand-only",
    value: "Hand Only"
  },
  {
    key: "hold-only",
    value: "Hold Only"
  },
  {
    key: "hand-hold",
    value: "Hand and Hold Baggage"
  }]

  constructor() {}

  toggleCheckedInChanged(checkedIn: boolean) {
      if(checkedIn){
        this.passenger.checkedInDate = Date.now();
      }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if(isValid) {
      this.update.emit(passenger);
    }
  }
}
