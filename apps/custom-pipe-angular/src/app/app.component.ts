import { Component } from '@angular/core';
type userType = {
  username: string,
  age: number
}
@Component({
  selector: 'custom-pipe-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'custom-pipe-angular';
  now = "2020-06-24T09:00:00.000Z";
  UserInfo:userType[] = [
    {
      username: 'tuanphan',
      age: 78
    },
    {
      username: 'tuanphan2',
      age: 12
    },
  ]
}
