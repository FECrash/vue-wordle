import { ActionContext, createStore } from 'vuex';
import { gameboard } from '@/constants';
import { KeyEntity } from 'wordle';

/**
 *
 * 1. targetWord
 * =============
 * - 키보드
 * 2. 단어를 클릭하면 게임보드에 입력된다.
 * 2-1. 5번 이상 단어를 입력하면 무시된다.
 * 2-2. Backspace 아이콘을 클릭하면 한 글자씩 지운다.
 * 2-3. 아무것도 없을 때 Backspace 아이콘을 클릭하면 무시된다.
 * 2-4. 5글자를 전부 입력한 뒤 Enter를 클릭하여 조건을 확인한다.
 * 2-5. 5글자 미만으로 입력한 뒤 Enter를 클릭하면 alert(모달 팝업)을 출력한다.
 * 2-6. 한 번 검증된 단어는 키보드의 스타일(Strike, Ball, Out)을 변경한다.
 * =============
 * - 게임 보드
 * 2. inputWord : Enter를 클릭했을 때
 * 2-1. inputWord가 입력될 때 옳은 단어인지 확인한다.
 * 2-2. inputWord가 targetWord와 같은지 확인한다.
 * 2-3. Strike, Ball, Out을 체크한다.
 * 2-4. 색상을 변경한다.
 * 3. 게임 결과
 * 3-1. 5번째 로우까지 맞히지 못하면 실패.
 * 3-2. 5번 이하로 단어를 맞추면 alert을 출력한다(모달 팝업).
 * =============
 * 4. 리셋은 생각하지 말자.
 */

export interface StoreStateProps {
  targetKeyword: string;
  gameboard: KeyEntity[][];
}

const store = createStore<StoreStateProps>({
  state: {
    targetKeyword: '',
    gameboard,
  },
  actions: {
    inputLetter(
      { commit }: ActionContext<StoreStateProps, StoreStateProps>,
      payload: { row: number; col: number; letter: string },
    ) {
      commit('input', payload);
    },
  },
  mutations: {
    input(state: StoreStateProps, { row, col, letter }: { row: number; col: number; letter: string }) {
      state.gameboard[row][col].letter = letter;
    },
  },
});

export default store;
