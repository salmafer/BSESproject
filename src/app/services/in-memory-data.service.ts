import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb () {
    let famouses = [
      { id: 2, name: 'Bill gates' },
      { id: 3, name: 'Cesaria Evora' },
      { id: 4, name: 'Lady GAGA' },
      { id: 5, name: 'Christiano ronaldo' },
      { id: 6, name: 'Eminem' },
      { id: 7, name: 'Emily rose' },
      { id: 8, name: 'Super mario' },
    ];
   return {famouses};
  }
}
