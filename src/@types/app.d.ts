// wordle state, string
// keyboard key, key state
// gameboard (keyword, row, key, key state)[]

declare module 'wordle' {
  export type KeyEntity = {
    key: string;
    state: 'out' | 'ball' | 'strike' | 'none';
  };

  export type GameboardRowEntity = {
    row: number;
    keyword: string;
    inputKeyword?: KeyEntity[];
  };

  export interface KeyboardModel {
    keys: KeyEntity[];
  }

  export interface GameboardModel {
    result: boolean;
    row: GameboardRowEntity[];
  }
}
