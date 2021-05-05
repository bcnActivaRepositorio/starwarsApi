import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipsListComponent } from './starships/starships-list/starships-list.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

// routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent},
  { path: 'starships', component: StarshipsListComponent},
  { path: '404', component: PageNotFoundComponent},
  // Path ** MUST be always the last route
 { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
