import * as gameLogic from '..';

const makeQuestionAnswer = (num) => {
  const question = num;
  const answer = num % 2 > 0 ? 'no' : 'yes';
  return gameLogic.questPair(question, answer);
};

const randInt = () => gameLogic.getRandomInt(1, 100);

const questionsAsnwers = [
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
];
const numberOfTries = 3;
const startGame = gameLogic.initiateGame(questionsAsnwers, numberOfTries);
export default startGame;
