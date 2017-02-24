import { times } from 'lodash';
import initiateGame, { questPair, getRandomInt, numberOfTries } from '..';

const gameTask = 'Answer "yes" if given number is a Prime number otherwise answer "no".';

const isPrime = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return 'yes';
    }
    if (num % acc === 0) {
      return 'no';
    }
    return iter(acc + 1);
  };
  return iter(2);
};
const makeQuestionAnswer = (num) => {
  const question = num;
  const answer = isPrime(num);
  return questPair(question, answer);
};

const randInt = () => getRandomInt(1, 100);

const questionsAnswers = times(numberOfTries, () => makeQuestionAnswer(randInt()));

export default initiateGame(questionsAnswers, gameTask);
