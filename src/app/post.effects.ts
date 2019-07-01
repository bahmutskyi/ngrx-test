import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LettersService } from './services/letters.service';
import { loadLetters, lettersLoadSuccess, lettersLoadError, postLetter, postLetterSuccess, postLetterError } from './post.actions';
 
@Injectable()
export class PostEffects {
  
  constructor(
    private actions$: Actions,
    private lettersService: LettersService
  ) {}

  loadLetters$ = createEffect(() => this.actions$.pipe(
    ofType(loadLetters),
    mergeMap(() => this.lettersService.getLetters()
      .pipe(
        map(letters => (lettersLoadSuccess({letters: letters}))),
        catchError(() => of(lettersLoadError()))
      ))
    )
  );

  postLetter$ = createEffect(() => this.actions$.pipe(
    ofType(postLetter),
    mergeMap((action) => this.lettersService.postLetter(action.letter)
      .pipe(
        map(letter => (postLetterSuccess({letter: action.letter}))),
        catchError(() => of(postLetterError()))
      ))
    )
  );
 
}