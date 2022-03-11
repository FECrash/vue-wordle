import wordList from './wordList';

// type OptionProps = {
//   min: number;
//   max: number;
//   exactly: number;
//   join: string;
//   wordsPerString: number;
//   separator: string;
//   maxLength: number;
//   formatter: (data: any) => any;
// };

function words(options: any) {
  function word() {
    if (options && options.maxLength > 1) {
      return generateWordWithMaxLength();
    } else {
      return generateRandomWord();
    }
  }

  function generateWordWithMaxLength() {
    let rightSize = false;
    let wordUsed;
    while (!rightSize) {
      wordUsed = generateRandomWord();
      if (wordUsed.length <= options.maxLength) {
        rightSize = true;
      }
    }
    return wordUsed;
  }

  function generateRandomWord() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan: any) {
    return Math.floor(Math.random() * lessThan);
  }

  // No arguments = generate one word
  if (typeof options === 'undefined') {
    return word();
  }

  // Just a number = return that many words
  if (typeof options === 'number') {
    options = { exactly: options };
  }

  // options supported: exactly, min, max, join
  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }

  // not a number = one word par string
  if (typeof options.wordsPerString !== 'number') {
    options.wordsPerString = 1;
  }

  //not a function = returns the raw word
  if (typeof options.formatter !== 'function') {
    options.formatter = (word: any) => word;
  }

  //not a string = separator is a space
  if (typeof options.separator !== 'string') {
    options.separator = ' ';
  }

  const total = options.min + randInt(options.max + 1 - options.min);
  let results: any = [];
  let token = '';
  let relativeIndex = 0;

  for (let i = 0; i < total * options.wordsPerString; i++) {
    if (relativeIndex === options.wordsPerString - 1) {
      token += options.formatter(word(), relativeIndex);
    } else {
      token += options.formatter(word(), relativeIndex) + options.separator;
    }
    relativeIndex++;
    if ((i + 1) % options.wordsPerString === 0) {
      results.push(token);
      token = '';
      relativeIndex = 0;
    }
  }
  if (typeof options.join === 'string') {
    results = results.join(options.join);
  }

  return results;
}

export default words;
