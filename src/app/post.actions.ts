import { createAction, props } from '@ngrx/store';
import { Letter } from './letter';

// export const addLetter = createAction('[AddLetter Component] Add', props<{ title: string; text: string }>());
// export const updateLetter = createAction('[AddLetter Component] Update', props<{ title: string; text: string, id: number }>());
// export const removeLetter = createAction('[LettersList Component] Remove', props<{ id: number }>());
export const loadLetters = createAction('[LettersList Component] Load Letters');
export const lettersLoadSuccess = createAction('[Letters API] Letters Loaded Success', props<{ letters: Letter[] }>());
export const lettersLoadError = createAction('[Letters API] Letters Loaded Error');
export const postLetter = createAction('[LettersList Component] Post Letter', props<{ letter: Letter }>());
export const postLetterSuccess = createAction('[Letters API] Post Letter Success', props<{ letter: Letter }>());
export const postLetterError = createAction('[Letters API] Post Letter Error');