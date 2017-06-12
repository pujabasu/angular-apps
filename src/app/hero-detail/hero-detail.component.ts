import { Component, OnInit,Input } from '@angular/core';
import {Hero} from './../hero';
import {HeroService} from './../hero.service';
import {ActivatedRoute, Router,Params} from '@angular/router';
import {Location} from '@angular/common';
import './../../../node_modules/rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private router:Router
  ) { }
  @Input() hero: Hero;
  ngOnInit() {
   // this.route.params.switchMap((params:Params)=>this.heroService.getHero(+params['id'])).subscribe(hero=>this.hero=hero);
   let id=+this.route.snapshot.params['id'];
   this.heroService.getHero(id).then(hero=>this.hero=hero);
}

  goBack():void {
   // this.location.back();
   const id=this.hero?this.hero.id:null;
   this.router.navigate(['./heroes',{id:id,foo:'foo'}]);
  }

  save():void{
    this.heroService.update(this.hero).then(()=>this.goBack());
  }
}
