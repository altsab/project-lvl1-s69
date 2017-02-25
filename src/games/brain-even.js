import { times, random } from 'lodash';
import initiateGame, { questPair, numberOfTries } from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const makeQuestionAnswer = (num) => {
  const question = num;
  const answer = num % 2 > 0 ? 'no' : 'yes';
  return questPair(question, answer);
};

const randInt = () => random(1, 100);
const questionsAnswers = times(numberOfTries, () => makeQuestionAnswer(randInt()));
export default initiateGame(questionsAnswers, gameTask);
