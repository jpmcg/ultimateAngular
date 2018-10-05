import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <a routerLink="/">
        Home
      </a>
      <a routerLink="/notfound">
        404
      </a>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {

}
