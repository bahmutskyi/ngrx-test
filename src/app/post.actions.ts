import { createAction, props } from '@ngrx/store';

export const addLetter = createAction('[AddLetter Component] Add', props<{ title: string; text: string }>());
export const updateLetter = createAction('[AddLetter Component] Update', props<{ title: string; text: string, id: number }>());
export const removeLetter = createAction('[LettersList Component] Remove', props<{ id: number }>());