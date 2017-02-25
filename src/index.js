import { head, tail, isEmpty } from 'lodash';
import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const getUserName = () => readlineSync.question('May I have your name? ');

export const questPair = (question, answer) => cons(question, answer);
export const getQuestion = pair => car(pair);
export const getAnswer = pair => cdr(pair);

export const numberOfTries = 3;
const initiateGame = (questionsAnswers, gameTask) =>
  () => {
    console.log('Welcome to the Brain Games');
    console.log(gameTask);
    const userName = getUserName();
    console.log(`Hello, ${userName}!`);
    const iterGame = (quiz) => {
      if (isEmpty(quiz)) {
        return console.log(`Congratulations, ${userName}!`);
      }
      const currentPair = head(quiz);
      const question = getQuestion(currentPair);
      const answer = String(getAnswer(currentPair));
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === answer) {
        console.log('Correct!');
        return iterGame(tail(quiz));
      }
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      return console.log(`Let's try again, ${userName}!`);
    };
    return iterGame(questionsAnswers);
  };
export default initiateGame;
