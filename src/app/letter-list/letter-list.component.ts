import { Component, OnInit } from '@angular/core';
import { Letter } from '../letter';
import { Store, select } from '@ngrx/store';
import { loadLetters } from '../post.actions';
import { selectFilteredLetters, selectAllLetters } from '../post.selectors';
import { Observable, of } from 'rxjs';
// import { LettersService } from '../services/letters.service';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss']
})
export class LetterListComponent implements OnInit {

  filterValue: string = '';
  letters$: Observable<Letter[]>;

  constructor(
    private store: Store<{ letters: Letter[] }>,
    // private lettersService: LettersService
  ) {
    this.letters$ = store.pipe(select('letters'));
  }

  clearFilter(): void {
    this.filterValue = '';
    this.letters$ = this.store.pipe(select('letters'));
  }

  applyFilter(value: string): void {
    // this.letters$ = of([{id: 22, subject: 'haha', text: 'yo'}]);
    this.letters$ = this.store.pipe(select(selectFilteredLetters, { filterValue: value }));
    console.log(value);
  }

  ngOnInit() {
    this.store.dispatch(loadLetters());
    // this.lettersService.getStarWarsGuy().subscribe(res => console.log(res));
  }

}
