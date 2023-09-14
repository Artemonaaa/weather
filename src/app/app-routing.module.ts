import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageUsers } from './pages/users/users.component';
import { PageFavorite } from './pages/favorite/favorite.component';

const routes: Routes = [
  { path: '', component: PageUsers },
  { path: 'favorite', component: PageFavorite }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
