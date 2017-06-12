import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {Headers,Http} from '@angular/http';
import './../../node_modules/rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesURL="api/heroes";
  constructor(private http:Http) { }

  getHeroes(): Promise<Hero[]>{
    // let heroes:Hero[]
  //    =[
  // { id: 11, name: 'Mr. Nice' },
  // { id: 12, name: 'Narco' },
  // { id: 13, name: 'Bombasto' },
  // { id: 14, name: 'Celeritas' },
  // { id: 15, name: 'Magneta' },
  // { id: 16, name: 'RubberMan' },
  // { id: 17, name: 'Dynama' },
  // { id: 18, name: 'Dr IQ' },
  // { id: 19, name: 'Magma' },
  // { id: 20, name: 'Tornado' }];

 // return Promise.resolve(heroes);

 return this.http.get(this.heroesURL).toPromise().then(data=>data.json().data as Hero[]).catch(this.handleError);
}

private handleError(error:any):Promise<any>{
  console.log("An error occured",error);
  return Promise.reject(error.message||error);

}
getHero(id:number):Promise<Hero>{
  let url= `${this.heroesURL}/${id}`;
 // return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
 return this.http.get(url).toPromise().then(response=>response.json().data as Hero).catch(this.handleError);
}
private headers=new Headers({'Content-Type':'application/json'});
  update(hero:Hero):Promise<Hero>{
    const url=`${this.heroesURL}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),{headers:this.headers})
    .toPromise()
    .then(res=>res.json().data as Hero)
    .catch(this.handleError);
  }


  createHero(name:string):Promise<Hero>{
    return this.http.post(this.heroesURL,JSON.stringify({name:name}),{headers:this.headers})
    .toPromise()
    .then(res=>res.json().data as Hero)
    .catch(this.handleError);
  }

  deleteHero(id:number):Promise<void>{
    const url=`${this.heroesURL}/${id}`;
    return this.http.delete(url,{headers:this.headers})
    .toPromise()
    .then(()=>null)
    .catch(this.handleError);
  }

}
