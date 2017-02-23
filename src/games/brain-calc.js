import { cons, car, cdr } from 'hexlet-pairs';
import * as gameLogic from '..';

const questionVersions = [
  cons((a, b) => `${a} + ${b}`, (a, b) => a + b),
  cons((a, b) => `${a} - ${b}`, (a, b) => a - b),
  cons((a, b) => `${a} * ${b}`, (a, b) => a * b)];

const makeQuestionAnswer = (a, b) => {
  const questionType = gameLogic.randomArrayItem(questionVersions);
  const question = car(questionType)(a, b);
  const answer = cdr(questionType)(a, b);
  return gameLogic.questPair(question, answer);
};

const randInt = () => gameLogic.getRandomInt(1, 100);

const questionsAsnwers = [
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
];
const numberOfTries = 3;
const startGame = gameLogic.doGame(questionsAsnwers, numberOfTries);
export default startGame;
