#!/usr/bin/env node
/* eslint no-eval: 0 */
const generateRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);

export default generateRandomNumber;