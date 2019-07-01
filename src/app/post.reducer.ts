import { createReducer, on } from '@ngrx/store';
import { lettersLoadSuccess, lettersLoadError, postLetterSuccess, postLetterError } from './post.actions';
import { Letter } from './letter';

export const initialState = [];

export const postReducer = createReducer(initialState,
  on(lettersLoadSuccess, (state, action) => action.letters),
  on(postLetterSuccess, (state, action) => [...state, action.letter])
);