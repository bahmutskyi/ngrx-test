import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Letter } from '../letter';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const letters: Letter[] = [
      { id: 0, subject: 'work', text: 'somth-smth' },
      { id: 1, subject: 'work', text: 'somth-smth'  },
      { id: 2, subject: 'doctor', text: 'somth-smth'  },
      { id: 3, subject: 'football', text: 'somth-smth'  },
      { id: 4, subject: 'interview', text: 'somth-smth'  },
      { id: 5, subject: 'doctor', text: 'somth-smth'  },
      { id: 6, subject: 'something', text: 'somth-smth'  },
      { id: 7, subject: 'work', text: 'somth-smth'  },
      { id: 8, subject: 'football', text: 'somth-smth'  },
      { id: 9, subject: 'something', text: 'somth-smth'  }
    ];
    return {letters};
  }

  // // Overrides the genId method to ensure that a hero always has an id.
  // // If the letters array is empty,
  // // the method below returns the initial number (11).
  // // if the letters array is not empty, the method below returns the highest
  // // hero id + 1.
  // genId(letters: Letter[]): number {
  //   return letters.length > 0 ? Math.max(...letters.map(letter => letter.id)) + 1 : 0;
  // }
}