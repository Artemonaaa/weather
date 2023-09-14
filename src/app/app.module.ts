import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PageUsers } from './pages/users/users.component';
import { PageFavorite } from './pages/favorite/favorite.component';

import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    PageUsers,
    PageFavorite,
    NavbarComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
