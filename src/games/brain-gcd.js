import initiateGame, { questPair, getRandomInt } from '..';

const gameTask = 'Find the greatest common divisor of given numbers.';

const makeQuestionAnswer = (a, b) => {
  const question = `${a} ${b}`;
  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const answer = gcd(a, b);
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
const makeGame = initiateGame(questionsAnswers, gameTask);
export default makeGame;
