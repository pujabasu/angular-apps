import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {HeroesComponent} from './heroes.component';
import {HeroSearchComponent} from './hero-search.component';
import {PageNotFoundComponent} from './not-found.component';
import {DashboardComponent} from './dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const appRoutes:Routes=[   
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'heroes',
        component: HeroesComponent
      },
      {
        path:'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
        //component: HeroesComponent
      },
      {
        path:'**',
        component: PageNotFoundComponent
      } 
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}