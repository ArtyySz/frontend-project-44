import generateRandomNumber from '../randomnumber.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, other answer "no"';

const isEven = (num) => num % 2 === 0;
const gameEven = () => {
  const randomNum = generateRandomNumber(0, 100);
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameLogic(rules, gameEven);
};
