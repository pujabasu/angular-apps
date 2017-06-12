import { Component, OnInit } from '@angular/core';
//import {Hero} from './hero';
import {HeroService} fro;
import {Router,ActivatedRoute,Params} from '@angular/router';
//import './../../../node_modules/rxjs/add/operator/switchMap';
import {Observable} from './../../node_modules/rxjs/observable';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  // title = 'Tour of Heroes';
  // hero:Hero={
  //   id: 1,
  //   name: "Windstorm"
  // }

  selectedHero:Hero;
selectedId:number;
ngOnInit():void{
  this.selectedId=+this.route.snapshot.params['id'];
  this.getHeroes();
}

isSelected(hero:Hero){return this.selectedId===hero.id}
constructor(private heroService:HeroService,private router:Router,private route:ActivatedRoute){}
//   heroes: Hero[]= [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

heroes: Hero[];

getHeroes(){
  this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
}
  onselect(hero:Hero):void{
    this.selectedHero=hero;
    this.selectedId=hero.id;
  }

  goToDetails():void{
    this.router.navigate(['/detail',this.selectedId])
  }

  addHero(name:string):void{
    name=name.trim();
    if(!name){return;}
    this.heroService.createHero(name).then(hero=>
    {
      this.heroes.push(hero);
      this.selectedHero=null;
    });
  }

  deleteHero(hero:Hero):void{
    this.heroService.deleteHero(hero.id).then(()=>
    {
      this.heroes=this.heroes.filter(h=>h!=hero);
      if(this.selectedHero===hero)
        this.selectedHero=null;
    })
  }
}
