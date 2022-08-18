//#1

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const total = (arr) => arr.reduce((acc, next) => acc + next.amount, 0);

console.log(total(orders));

//#2

const incrementByOne = (arr) => arr.map((el) => el + 1);

console.log(incrementByOne([1, 2, 3, 4, 5]));

//#3
const evenFilter = (arr) => arr.filter((el) => el % 2 === 0);

console.log(evenFilter([2, 3, 4, 5, 6, 7]));

//#4

const filterItems = (arr, str) => arr.filter((el) => el.includes(str));

console.log(filterItems(["rika", "jenna", "bleda", "oliver", "itamar"], "it"));

//#5

const sum = (arr) => arr.reduce((acc, next) => acc + next);

console.log(sum([1, 2, 4, 5]));

//#6

const squareRoot = (arr) => arr.map((el) => Math.sqrt(el));

console.log(squareRoot([4, 9, 16]));
