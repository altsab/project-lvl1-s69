import { times, random } from 'lodash';
import initiateGame, { questPair, numberOfTries } from '..';

const gameTask = 'Answer "yes" if given number is a Prime number otherwise answer "no".';

const isPrime = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return true;
    }
    if (num % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const makeQuestionAnswer = (num) => {
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return questPair(question, answer);
};

const randInt = () => random(1, 100);
const questionsAnswers = times(numberOfTries, () => makeQuestionAnswer(randInt()));
export default initiateGame(questionsAnswers, gameTask);
