import * as gameLogic from '..';

const gameTask = ('Answer "yes" if number even otherwise answer "no".');

const makeQuestionAnswer = (num) => {
  const question = num;
  const answer = num % 2 > 0 ? 'no' : 'yes';
  return gameLogic.questPair(question, answer);
};

const randInt = () => gameLogic.getRandomInt(1, 100);

const questionsAnswers = [
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
];
const numberOfTries = 3;
const makeGame = gameLogic.initiateGame(questionsAnswers, numberOfTries, gameTask);
export default makeGame;
