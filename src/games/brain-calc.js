import { cons, car, cdr } from 'hexlet-pairs';
import initiateGame, { randomArrayItem, questPair, getRandomInt } from '..';

const gameTask = 'What is the result of the expression?';
const questionTypes = [
  cons((a, b) => `${a} + ${b}`, (a, b) => a + b),
  cons((a, b) => `${a} - ${b}`, (a, b) => a - b),
  cons((a, b) => `${a} * ${b}`, (a, b) => a * b)];

const makeQuestionAnswer = (a, b) => {
  const questionType = randomArrayItem(questionTypes);
  const question = car(questionType)(a, b);
  const answer = cdr(questionType)(a, b);
  return questPair(question, answer);
};

const randInt = () => getRandomInt(1, 100);

const questionsAnswers = [
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
];
export default initiateGame(questionsAnswers, gameTask);
