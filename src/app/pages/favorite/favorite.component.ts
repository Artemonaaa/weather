// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: "page-favorite",
  templateUrl: "favorite.component.html"
})

export class PageFavorite implements OnInit {
  usersFromStore: IUser[] = []

  ngOnInit(): void {
    if(localStorage.length === 0) return
    for (let i = 0; i < localStorage.length; ++i) {
      let key:string = localStorage.key(i);
      let value:IUser = localStorage.getItem(key);
      this.usersFromStore.push(JSON.parse(value));
    }
  }
}