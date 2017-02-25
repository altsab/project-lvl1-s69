import { times, random, sample, set } from 'lodash';
import initiateGame, { questPair, numberOfTries } from '..';

const gameTask = 'What number is missing in this progression?';

const makeSeqArray = (start, step, length) => {
  const iter = (array, lastValue, counter) => {
    if (counter === length) {
      return array;
    }
    const nextValue = lastValue + step;
    const newArray = array.concat(nextValue);
    return iter(newArray, nextValue, counter + 1);
  };
  return iter([start], start, 1);
};

const randInt = () => random(1, 50);
const makeQuestionAnswer = () => {
  const seqArray = makeSeqArray(randInt(), randInt(), 10);
  const answer = sample(seqArray);
  const answerIndex = seqArray.indexOf(answer);
  const question = set(seqArray, answerIndex, '..').join(' ');
  return questPair(question, answer);
};

const questionsAnswers = times(numberOfTries, () => makeQuestionAnswer());
export default initiateGame(questionsAnswers, gameTask);
