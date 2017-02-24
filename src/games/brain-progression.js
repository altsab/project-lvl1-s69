import initiateGame, { questPair, getRandomInt, randomArrayItem } from '..';

const gameTask = 'What number is missing in this progression?';

const randInt = () => getRandomInt(1, 50);

const makeSeqArray = (start, step, length) => {
  const array = [start];
  const iter = (lastValue, counter) => {
    if (counter === length) {
      return array;
    }
    const nextValue = lastValue + step;
    array.push(nextValue);
    return iter(nextValue, counter + 1);
  };
  return iter(start, 1);
};

const makeQuestionAnswer = () => {
  const seqArray = makeSeqArray(randInt(), randInt(), 10);
  const answer = randomArrayItem(seqArray);
  const answerIndex = seqArray.indexOf(answer);
  seqArray[answerIndex] = '..';
  const question = seqArray.join(' ');
  return questPair(question, answer);
};

const questionsAnswers = [
  makeQuestionAnswer(),
  makeQuestionAnswer(),
  makeQuestionAnswer(),
  makeQuestionAnswer(),
  makeQuestionAnswer(),
  makeQuestionAnswer(),
];

export default initiateGame(questionsAnswers, gameTask);
