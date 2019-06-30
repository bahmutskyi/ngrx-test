import { createReducer, on } from '@ngrx/store';
import { addLetter, updateLetter, removeLetter } from './post.actions';
import { Letter } from './letter';

export const initialState = [
  {
    id: 0,
    title: 'test',
    text: 'test text'
  },
  {
    id: 1,
    title: 'test1',
    text: 'test text1'
  }
];

export const postReducer = createReducer(initialState,
  on(addLetter, (state, action) => {
    console.log(action);
    return [...state, new Letter(3, action.title, action.text)];
  }),
  on(updateLetter, state => state),
  on(removeLetter, state => state),
);