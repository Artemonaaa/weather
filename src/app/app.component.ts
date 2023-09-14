import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs'

import { IUser } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'weather';
}
