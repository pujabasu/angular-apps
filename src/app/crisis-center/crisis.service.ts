import { Injectable } from '@angular/core';

@Injectable()
export class CrisisService {

  constructor(public id:number,public name:string) { }

}

const CRISES=[
  new CrisisService(1,'A'),
  new CrisisService(2,'B'),
  new CrisisService(3,'C'),
  new CrisisService(4,'D')
];
