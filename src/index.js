import readlineSync from 'readline-sync';

export default () => readlineSync.question('May I have your name? ');
export const getRandomInt = (min, max) => {
  const smin = Math.ceil(min);
  const smax = Math.floor(max);
  return Math.floor(Math.random() * (smax - smin)) + smin;
};
const doGame = (question, correctAnswerDefiner) => {
  const correctAnswer = correctAnswerDefiner(question);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  }
  return (userAnswer === correctAnswer);
};
const randomQuestionChooser = questions => questions[Math.floor(Math.random() * questions.length)];
export const startGame = (questionsArray, correctAnswerDefiner, userName) => {
  for (let i = 0; i < 3; i += 1) {
    const question = randomQuestionChooser(questionsArray);
    const result = doGame(question, correctAnswerDefiner);
    if (!result) {
      return console.log(`Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
