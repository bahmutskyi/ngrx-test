import { createSelector } from '@ngrx/store';
import { Letter } from './letter';

export interface AppState {
    letters: Letter[];
}

export const selectAllLetters = (state: AppState) => state.letters;

export const selectFilteredLetters = createSelector(
    selectAllLetters,
    (letters, props) => {
        if (letters && props) {
            return letters.filter((letter: Letter) => letter.subject.includes(props.filterValue))
        }
    }
);