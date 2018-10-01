import { Component } from '@angular/core';

interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number,
  name: string,
  checkedIn: boolean,
  checkedInDate?: number
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app">      
      <button (click)='handleClick(username.value)'>Change Name</button>
      <input type='text' [value]='name'
      (input)='handleChange($event.target.value)' #username>

      <div *ngIf='name.length'>
        Searching for... {{ name }}
      </div>
    </div>
    <h2>Airline Passengers</h2>
    <div>
      {{ passengers | json }}
    </div>
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
    <h2>Airline Passengers</h2>
    <div>
    <ul>
      <li *ngFor='let p of passengers; let i = index'>
        <span class='status' [ngClass]="{ 
          'checked-in': p.checkedIn, 
          'checked-out': !p.checkedOut 
        }"></span>
        <span>{{ i }} :  {{ p.name }}</span>
      </li>
    </ul>
  </div>
  <h2>Airline Passengers</h2>
  <div>
  <ul>
    <li *ngFor='let p of passengers; let i = index'>
      <span class='status' [ngStyle]="{ backgroundColor: (p.checkedIn ? 'green' : 'red') }"></span>
      <span>{{ i }} :  {{ p.name }}</span>
    </li>
  </ul>
</div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name: string = '';

  passengers: Passenger[] = [
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

  handleClick(value: string) {
   console.log(value);
  }

  handleChange(str:string){
    this.name = str;
  }
}