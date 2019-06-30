import { Component, OnInit } from '@angular/core';
import { Letter } from '../letter';
import { Store, select } from '@ngrx/store';
import { addLetter, updateLetter, removeLetter } from '../post.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss']
})
export class LetterListComponent implements OnInit {

  letters$: Observable<Letter[]>;

  constructor(
    private store: Store<Letter[]>
  ) {
    this.letters$ = store.pipe(select('letters'));
  }

  addLetter():void {
    this.store.dispatch(addLetter({ title: 'hello', text: 'yo' }));
  }

  ngOnInit() {
  }

}
