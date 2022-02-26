import { KeyEntity } from 'wordle';

// initial Keyboard Data
export const keyboard: KeyEntity[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'icon'],
].map(row => row.map(item => ({ key: item, state: 'none' })));
