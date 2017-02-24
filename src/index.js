import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export default () => readlineSync.question('May I have your name? ');

export const randomArrayItem = array => array[Math.floor(Math.random() * array.length)];

export const getRandomInt = (min, max) => {
  const smin = Math.ceil(min);
  const smax = Math.floor(max);
  return Math.floor(Math.random() * (smax - smin)) + smin;
};

export const questPair = (question, answer) => cons(question, answer);
export const getQuestion = pair => car(pair);
export const getAnswer = pair => cdr(pair);

export const initiateGame = (questionsAnswers, numberOfTries, gameTask) =>
  () => {
    console.log('Welcome to the Brain Games');
    console.log(gameTask);
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    for (let i = 0; i < numberOfTries; i += 1) {
      const question = getQuestion(questionsAnswers[i]);
      const answer = String(getAnswer(questionsAnswers[i]));
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === answer) {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    }
    return console.log(`Congratulations, ${userName}!`);
  };
