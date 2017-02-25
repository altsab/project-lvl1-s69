import { times, max, min, random } from 'lodash';
import initiateGame, { questPair, numberOfTries } from '..';

const gameTask = 'Balance the given number.';

const balanceNumbers = (numArray) => {
  const maxValue = max(numArray);
  const minValue = min(numArray);
  if (maxValue - minValue === 1) {
    return numArray.sort();
  }
  const maxIndex = numArray.indexOf(maxValue);
  const minIndex = numArray.indexOf(minValue);
  const newArray = numArray;
  newArray[maxIndex] = maxValue - 1;
  newArray[minIndex] = minValue + 1;
  return balanceNumbers(newArray);
};

const numToArray = num => num.toString(10).split('').map(Number);

const makeQuestionAnswer = (num) => {
  const question = num;
  const numbersArray = numToArray(num);
  const answer = balanceNumbers(numbersArray).join('');
  return questPair(question, answer);
};

const questionsAnswers = times(numberOfTries, () => makeQuestionAnswer(random(100, 9999)));
export default initiateGame(questionsAnswers, gameTask);
