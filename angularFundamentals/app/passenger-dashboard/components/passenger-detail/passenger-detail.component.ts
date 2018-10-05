import  { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  template: `
  <span class='status' [class.checked-in]='detail.checkedIn'></span>
  <div>
    <input *ngIf="editing"
      type="text"
      [value]="detail.name"
      (input)="nameChange(name.value)"
      #name>
  </div>
  <div *ngIf="!editing">
    {{ detail.name }}
  </div>
  <div class="date">
    Check-In Date: {{ detail.checkedIn ?  (detail.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not Checked In' }}
  </div>
  <div>
    <button (click)="toggleEdit()">
      {{ editing ? "Done" : "Edit" }}
    </button>
    <button (click)="onRemove()">
      Remove
  </button>
  </div>
  `,
  styleUrls: ['passenger-detail.component.scss']
})

export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();
  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();

  editing: boolean = false;

  ngOnChanges(changes) {
    console.log(changes);
  }

  nameChange(name: string){
    this.detail.name = name;
  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
