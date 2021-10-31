import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Queue';
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
