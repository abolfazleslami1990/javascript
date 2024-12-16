// Question 1: Generate secret Passkey with specific length and make sure atleast two special characters are included

// 1. Create a secret Passkey with Specific length

// 2. check for special characters are included, if not, replace at least two characters with special ones

const passKey = (length) => {
  const randomNum = (max) => Math.floor(Math.random() * max);
  const alphanumericChars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialChars = '!@#$%^&*';
  const chars = `${alphanumericChars}${specialChars}`;
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomChar = randomNum(chars.length);
    key += chars[randomChar];
  }
  const secretKeyArr = key.split('');
  const regex = new RegExp(`[${specialChars}]`, 'g');
  const matches = key.match(regex);
  const matchesLength = matches ? matches.length : 0;
  if (matchesLength < 2) {
    for (let i = 0; i < 2 - matchesLength; i++) {
      const randSpecial = specialChars[randomNum(specialChars.length)];
      secretKeyArr[randomNum(key.length)] = randSpecial;
    }
  }
  return secretKeyArr.join('');
};

console.log(passKey(26));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#2: Find Maximum Value: Write a function to find the largest number in an array.

const maxValue = (arr) => Math.max(...arr);
console.log(maxValue([1, 3, 5, 8, 11, 2, 55]));

// or using custom function

const findMaxValue = (arr) => {
  return arr.reduce(
    (result, current) => (result > current ? result : current),
    -Infinity,
  );
};

console.log(findMaxValue([1, 3, 5, 8, 11, 2, 55]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#3: Sum of Array Elements: Create a function to calculate the sum of all elements in an array.

const arrSum = (arr) => arr.reduce((result, current) => result + current, 0);
console.log(arrSum([1, 2, 3, 4, 5]));

// method 2

const sumArray = (arr) => {
  const sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
};

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#4: Filter Even Numbers: Write a function to return a new array containing only even numbers from the input array.

const evenNumsOnly = (...arr) => {
  const evens = (item) => item % 2 === 0;
  return arr.filter(evens);
};
console.log(evenNumsOnly(1, 2, 3, 4, 5, 6, 7, 8));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#5: Fibonacci Sequence: Create a function that generates the first n Fibonacci numbers and stores them in an array.

const FibonacciSequence = (n) => {
  const sequences = [];
  for (let i = 0; i < n; i++) {
    if (sequences.length < 2) {
      sequences.push(i);
    } else {
      const sum = sequences[i - 1] + sequences[i - 2];
      sequences.push(sum);
    }
  }
  return sequences;
};
console.log(FibonacciSequence(11));
