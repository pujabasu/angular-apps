import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HeroesComponent} from './heroes.component';
import {HeroSearchComponent} from './hero-search.component';
import {PageNotFoundComponent} from './not-found.component';
import {DashboardComponent} from './dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import { HeroSearchService } from './hero-search.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    PageNotFoundComponent,
    CrisisCenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //     //component: HeroesComponent
    //   },
    //   {
    //     path:'detail/:id',
    //     component: HeroDetailComponent
    //   },
    //   {
    //     path:'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path:'heroes',
    //     component: HeroesComponent
    //   },
    //   {
    //     path:'**',
    //     component: PageNotFoundComponent
    //   } 
    // ])
  ],
  providers: [HeroService,HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
