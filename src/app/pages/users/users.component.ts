import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/models/user';

import { UserService } from './../../services/users.services';

@Component({
  selector: "page-users",
  templateUrl: "users.component.html",
})

export class PageUsers implements OnInit {
  constructor(private userService: UserService) {}

  users: IUser[] = []

  ngOnInit(): void {
    this.userService.getAll().subscribe(user => {
      this.users = user
    })
  }
}