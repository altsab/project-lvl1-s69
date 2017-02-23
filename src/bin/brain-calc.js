#!/usr/bin/env node
import getName from '..';
import game from '../games/brain-calc';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
const userName = getName();
console.log(`Hello, ${userName}!`);

game(userName);
