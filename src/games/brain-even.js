import initiateGame, { questPair, getRandomInt } from '..';


const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const makeQuestionAnswer = (num) => {
  const question = num;
  const answer = num % 2 > 0 ? 'no' : 'yes';
  return questPair(question, answer);
};

const randInt = () => getRandomInt(1, 100);

const questionsAnswers = [
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
  makeQuestionAnswer(randInt()),
];

export default initiateGame(questionsAnswers, gameTask);
