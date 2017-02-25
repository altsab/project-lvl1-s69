import { times, random } from 'lodash';
import initiateGame, { questPair, numberOfTries } from '..';

const gameTask = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const makeQuestionAnswer = (a, b) => {
  const question = `${a} ${b}`;
  const answer = gcd(a, b);
  return questPair(question, answer);
};

const randInt = () => random(1, 100);
const questionsAnswers = times(numberOfTries, () => makeQuestionAnswer(randInt(), randInt()));
export default initiateGame(questionsAnswers, gameTask);
