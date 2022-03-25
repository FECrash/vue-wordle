declare module 'wordle' {
  export type LetterStateProps = 'out' | 'ball' | 'strike' | 'none';

  export type KeyEntity = {
    letter: string;
    state: LetterStateProps;
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

  export interface StoreStateProps {
    targetKeyword: string;
    gameboard: KeyEntity[][];
    keyboard: KeyEntity[][];
    row: number;
    col: number;
    isSuccess: boolean;
  }

  export type PayloadProps = {
    letter: string;
  };
}

declare module 'common' {
  export type ValidFunction<T> = (left: T, right: T) => boolean;
}
