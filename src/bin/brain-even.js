#!/usr/bin/env node
import getName, * as gameLib from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = getName();
console.log(`Hello, ${userName}!`);
const questionsArray = [gameLib.getRandomInt(1, 100), gameLib.getRandomInt(1, 100),
  gameLib.getRandomInt(1, 100), gameLib.getRandomInt(1, 100), gameLib.getRandomInt(1, 100)];
const correctAnswerDefiner = (question) => {
  if (question % 2 > 0) {
    return 'no';
  }
  return 'yes';
};

gameLib.startGame(questionsArray, correctAnswerDefiner, userName);
// const game = (numbers) => {
//   const gameFunc = (num) => {
//     console.log(`Question: ${num}`);
//     const answer = readlineSync.question('Your answer: ');
//     const correctAnswer = num % 2 > 0 ? 'no' : 'yes';
//     if (answer !== correctAnswer) {
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
//     }
//     return (answer === correctAnswer);
//   };
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (!gameFunc(numbers[i])) {
//       return console.log(`Let's try again, ${userName}`);
//     }
//   }
//   return console.log(`Congratulations, ${userName}`);
// };
