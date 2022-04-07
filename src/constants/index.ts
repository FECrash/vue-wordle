import { KeyEntity } from 'wordle';
import { cloneDeep } from 'lodash';

// initial Keyboard Data
export const keyboard: KeyEntity[][] = cloneDeep(
  [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'backspace'],
  ].map(row => row.map(item => ({ letter: item, state: 'none' }))),
);

export const WORD_MAX_LENGTH = 5;

export const GAME_STATE = {
  STRIKE: 'strike',
  BALL: 'ball',
  OUT: 'out',
  NONE: 'none',
};

export const gameboard: KeyEntity[][] = cloneDeep(
  Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => ({
      letter: '',
      state: 'none',
    })),
  ),
);
