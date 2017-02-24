import { times } from 'lodash';
import initiateGame, { questPair, getRandomInt, numberOfTries } from '..';

const gameTask = 'Find the greatest common divisor of given numbers.';

const makeQuestionAnswer = (a, b) => {
  const question = `${a} ${b}`;
  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const answer = gcd(a, b);
  return questPair(question, answer);
};

const randInt = () => getRandomInt(1, 100);
const questionsAnswers = times(numberOfTries, () => makeQuestionAnswer(randInt(), randInt()));
export default initiateGame(questionsAnswers, gameTask);
