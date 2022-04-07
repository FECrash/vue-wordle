import { ActionContext, createStore } from 'vuex';
import { keyboard, gameboard, WORD_MAX_LENGTH } from '@/constants';
import { StoreStateProps, PayloadProps, LetterStateProps, KeyEntity } from 'wordle';
import { ValidFunction } from 'common';
import { words, getWordList } from '@/words';

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

// [
//   ['W', 'O', 'R', 'L', 'D'],
//   ['O', 'L', 'D', 'E', 'R'],
// ]
const targetKeyword = words({ maxLength: WORD_MAX_LENGTH })[0];
console.log(targetKeyword);
const store = createStore<StoreStateProps>({
  state: {
    targetKeyword,
    gameboard,
    keyboard,
    row: 0,
    col: 0,
    isSuccess: false,
  },
  actions: {
    inputLetter({ commit }: ActionContext<StoreStateProps, StoreStateProps>, { letter }: PayloadProps) {
      commit(letter.length === 1 ? 'input' : letter.toLowerCase(), { letter });
    },
  },
  mutations: {
    input(state: StoreStateProps, { letter }: PayloadProps) {
      if (state.col >= WORD_MAX_LENGTH) return;
      if (state.row >= WORD_MAX_LENGTH) return;
      state.gameboard[state.row][state.col++].letter = letter;
    },
    backspace(state: StoreStateProps) {
      if (state.col <= 0) return;
      state.gameboard[state.row][--state.col].letter = '';
    },
    enter(state: StoreStateProps) {
      if (state.col !== WORD_MAX_LENGTH) return alert('다섯 글자가 아니네요!');
      if (state.row >= WORD_MAX_LENGTH) return;
      const keyword = state.gameboard[state.row].map(({ letter }) => letter).join('');
      if (!getWordList().includes(keyword)) return alert('단어가 아니에요!');
      changeLetterState(state);
      if (keyword === state.targetKeyword) {
        state.isSuccess = true;

        setTimeout(() => {
          alert('🎉정답!🎉 축하해요!!🥰\n게임을 다시 시작합니다!');
          state.targetKeyword = words({ maxLength: WORD_MAX_LENGTH })[0];
          state.gameboard = gameboard;
          state.keyboard = keyboard;
          state.row = 0;
          state.col = 0;
          state.isSuccess = false;
        }, 500);
        return;
      }
      state.row++;
      state.col = 0;
    },
  },
});

// @issue: 크롬 브라우저에서 치환된 '%'가 두 개가 되면 하나가 사라진다.
const correctLetterState = (keyword: string, letter: string, index: number): [string, LetterStateProps] => {
  if (keyword.charAt(index) === letter) return [keyword.replace(letter, '='), 'strike'];
  if (keyword.includes(letter)) return [keyword, 'ball'];
  return [keyword, 'out'];
};

/**
 *
 * @param state
 * @TODO: targetKeyword와 keyword 검증
 * && 연산자 활용해서 체크
 */
const changeLetterState = (state: StoreStateProps) => {
  const gameboard = state.gameboard[state.row];
  const keyboard = state.keyboard.flat();
  let targetKeyword = state.targetKeyword;
  gameboard.forEach((key, index) => {
    const keyboardLetter = keyboard.find(({ letter }) => letter === key.letter) as KeyEntity;
    const [changedKeyword, inputState] = correctLetterState(targetKeyword, key.letter, index);
    targetKeyword = changedKeyword;
    // 게임보드에 반영하기
    if (isCurrentHighPriority(inputState, key.state)) {
      key.state = inputState;
      // 키보드 반영하기
      if (isCurrentHighPriority(key.state, keyboardLetter.state)) {
        keyboardLetter.state = key.state;
      }
    }
  });
  gameboard
    .filter(key => key.state === 'ball')
    .forEach(key => {
      if (!targetKeyword.includes(key.letter)) key.state = 'out';
      else targetKeyword = targetKeyword.replace(key.letter, '=');
    });
  // P A P P P => B B S B B
  // % % % L E.includes(item.letter)
  // => x :  out
  // o : % % % L E
  // ==========================================
  // A P L L L
  // S S B S B.filter(state === 'ball')
  // [L{letter,state} L]
  // [L, L].forEach()
  // % % P % E.includes(item.letter) => L = out;
};

const isCurrentHighPriority: ValidFunction<LetterStateProps> = (current, latest) => {
  const priority: Record<LetterStateProps, number> = {
    strike: 3,
    ball: 2,
    out: 1,
    none: 0,
  };

  return priority[current] >= priority[latest];
};

export default store;
