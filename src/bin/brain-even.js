#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
// const name = readlineSync.question('May I have your name? ');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const getRandomInt = (min, max) => {
  const smin = Math.ceil(min);
  const smax = Math.floor(max);
  return Math.floor(Math.random() * (smax - smin)) + smin;
};
const gameNumbers = [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)];
const game = (numbers) => {
  const gameFunc = (num) => {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = num % 2 > 0 ? 'no' : 'yes';
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    }
    return (answer === correctAnswer);
  };
  for (let i = 0; i < numbers.length; i += 1) {
    if (!gameFunc(numbers[i])) {
      return console.log(`Let's try again, ${userName}`);
    }
    console.log('Correct!');
  }
/* const result = numbers.reduce((acc, number) => gameFunc(number) && acc, true);
  above is made for old solution, using map method of an array, but seems like
  there is no 'break' expression for map, so I made 'for' loop.
*/
  return console.log(`Congratulations, ${userName}`);
};

game(gameNumbers);
