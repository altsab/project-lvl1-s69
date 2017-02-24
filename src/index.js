import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const getUserName = () => readlineSync.question('May I have your name? ');

export const randomArrayItem = array => array[Math.floor(Math.random() * array.length)];

export const getRandomInt = (min, max) => {
  const smin = Math.ceil(min);
  const smax = Math.floor(max);
  return Math.floor(Math.random() * (smax - smin)) + smin;
};

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
    const iterGame = (index) => {
      if (index === numberOfTries) {
        return console.log(`Congratulations, ${userName}!`);
      }
      const question = getQuestion(questionsAnswers[index]);
      const answer = String(getAnswer(questionsAnswers[index]));
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === answer) {
        console.log('Correct!');
        const newIndex = index + 1;
        return iterGame(newIndex);
      }
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      return console.log(`Let's try again, ${userName}!`);
    };
    return iterGame(0);
  };
export default initiateGame;
