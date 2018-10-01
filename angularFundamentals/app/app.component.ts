import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class="app">      
      <button (click)='handleClick(username.value)'>Change Name</button>
      <input type='text' #username>
      <p>{{ name }}</p>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name: string = 'John';


  handleClick(value: string) {
   console.log(value);
  }
}