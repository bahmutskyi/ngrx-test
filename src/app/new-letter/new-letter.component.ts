import { Component, OnInit } from '@angular/core';
import { addLetter, updateLetter, removeLetter } from '../post.actions';
import { Store } from '@ngrx/store';
import { Letter } from '../letter';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.scss']
})
export class NewLetterComponent implements OnInit {

  currentLetter: Letter = new Letter();

  constructor(
    private store: Store<Letter[]>) { }

  ngOnInit() {
  }

  addLetter(): void {
    this.store.dispatch(addLetter({ title: 'hello', text: 'yo' }));
  }

}
