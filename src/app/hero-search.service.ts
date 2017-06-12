import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Hero} from './hero';
import {Observable} from './../../node_modules/rxjs/Observable';
import './../../node_modules/rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {

  constructor(private http:Http) { }

  search(term:string):Observable<Hero[]>{
    return this.http.get(`app/heroes/?name=${term}`)
    .map(response=>response.json().data as Hero[]);
  }

}
