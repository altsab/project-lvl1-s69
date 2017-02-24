import { times } from 'lodash';
import initiateGame, { questPair, getRandomInt, numberOfTries } from '..';

const gameTask = 'Balance the given number.';
const randInt = () => getRandomInt(10, 10000);

const balanceNumbers = (numArray) => {
  const max = Math.max(...numArray);
  const min = Math.min(...numArray);
  if (max - min === 1) {
    return numArray.sort((a, b) => (a - b));
  }
  const maxIndex = numArray.indexOf(max);
  const minIndex = numArray.indexOf(min);
  const newArray = numArray;
  newArray[maxIndex] = max - 1;
  newArray[minIndex] = min + 1;
  return balanceNumbers(newArray);
};

const numToArray = (num) => {
  const strNum = String(num);
  const strArr = strNum.split('');
  return strArr.map(a => parseInt(a, 10));
};

const makeQuestionAnswer = (num) => {
  const question = num;
  const numbersArray = numToArray(num);
  const answer = balanceNumbers(numbersArray).join('');
  return questPair(question, answer);
};

const questionsAnswers = times(numberOfTries, () => makeQuestionAnswer(randInt()));
export default initiateGame(questionsAnswers, gameTask);
