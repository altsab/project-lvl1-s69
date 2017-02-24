import * as gameLogic from '..';

const gameTask = ('Find the greatest common divisor of given numbers.');

const makeQuestionAnswer = (a, b) => {
  const question = `${a} ${b}`;
  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const answer = gcd(a, b);
  return gameLogic.questPair(question, answer);
};

const randInt = () => gameLogic.getRandomInt(1, 100);

const questionsAnswers = [
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
  makeQuestionAnswer(randInt(), randInt()),
];
const numberOfTries = 3;
const startGame = gameLogic.initiateGame(questionsAnswers, numberOfTries, gameTask);
export default startGame;
