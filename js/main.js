let num = 266219;

const getMultiple = (num) =>
  num
    .toString() // переводим в строку
    .split('') // делим на части
    .reduce((res, item) => item * res, 1);
console.log(getMultiple(num));
let exp = Math.pow(getMultiple(num), 3);
console.log(exp);
let twoChar = String(exp).slice(0, 2);
console.log(twoChar);
