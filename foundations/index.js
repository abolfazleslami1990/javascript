// Question 1: Generate secret Passkey with specific length and make sure atleast two special characters are included

// 1. Create a secret Passkey with Specific length

// 2. check for special characters are included, if not, replace at least two characters with special ones

const randomNum = (max) => Math.floor(Math.random() * max);
const passKey = (length) => {
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

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#6: Magic Number: Write a function to find all numbers in an array that are divisible by both 3 and 5.

const magicNums = (arr) => arr.filter((item) => item % 3 === 0 && item % 5 === 0);

console.log(magicNums([1, 2, 3, 4, 15, 25, 30, 45, 785, 255]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#7: Even-Odd Sort: Sort the array so that all even numbers appear first (in ascending order), followed by all odd numbers (also in ascending order).

const nums = [12, 7, 25, 4, 18, 9, 33, 10, 2, 15, 5, 27, 6, 22, 19];
const evenOddSort = (arr) => {
  const evens = arr.filter((item) => item % 2 === 0).sort((a, b) => a - b);
  const odds = arr.filter((item) => item % 2 !== 0).sort((a, b) => a - b);
  return [...evens, ...odds];
};

console.log(evenOddSort(nums));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#8: Number to Binary: Convert each number in an array to its binary representation (as a string).

const numbersToBinary = (arr) => {
  function convertToBinary(item) {
    const binary = [];
    let num = item;
    while (num > 0) {
      const bi = num % 2;
      binary.unshift(String(bi));
      num = Math.floor(num / 2);
    }
    return binary.join('').padStart(8, '0');
  }
  return arr.map(convertToBinary);
};

console.log(numbersToBinary([5, 10, 25, 78, 22]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#9: Missing Numbers: Given an array of consecutive integers with numbers missing, find missing numbers.

const missingNumbers = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const newArr = new Set(arr);
  const missingNums = [];
  for (let i = min; i <= max; i++) {
    if (!newArr.has(i)) missingNums.push(i);
  }
  return missingNums;
};

console.log(missingNumbers([1, 3, 5]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#10: Coin Toss Simulation: Simulate 10 coin tosses (e.g., "H" for heads and "T" for tails) and store the results in an array.

const coinToss = (n) => {
  //randomNum function is at the top of document
  const simulate = [];
  const coinFaces = 'HT';
  for (let i = 0; i < n; i++) simulate.push(coinFaces[randomNum(coinFaces.length)]);
  return simulate;
};
console.log(coinToss(10));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#11: Sum of Even Numbers: Write a function that takes an array of numbers and returns the sum of all the even numbers.

const sumOfEvens = (arr) => {
  return arr
    .filter((item) => item % 2 === 0)
    .reduce((result, current) => result + current, 0);
};
console.log(sumOfEvens([1, 2, 3, 4, 5, 6]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#12: Remove Duplicates: Write a function that removes duplicate elements from an array.

const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 2, 4, 1]));

// medtod 2

const deleteDuplicates = (arr) => {
  const newArr = [];
  for (const item of arr) {
    if (!newArr.includes(item)) newArr.push(item);
  }
  return newArr;
};
console.log(deleteDuplicates([1, 2, 3, 2, 4, 1]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#13: Count Vowels: Write a function that takes an array of strings and counts the total number of vowels in all strings.

const countVowels = (arr) => {
  const regex = /[aeiou]/g;
  return arr.join('').match(regex).length;
};
console.log(countVowels(['apple', 'banana', 'cherry']));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#14: Find Largest Element: Write a function to find the largest number in an array.

const findLargest = (arr) =>
  arr.reduce((result, current) => (current > result ? current : result), -Infinity);
console.log(findLargest([1, 9, 3, 7, 5]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#15: Filter Long Strings: Write a function to filter out strings shorter than _n_ characters.

const filterLongStrings = (arr, n) => arr.filter((item) => item.length >= n);

console.log(filterLongStrings(['a', 'hello', 'world', 'hi'], 3));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#16: Product of All Numbers: Write a function to calculate the product of all numbers in an array.

const productOfNumbers = (arr) =>
  arr.reduce((result, current) => result * current, 1);
console.log(productOfNumbers([1, 2, 3, 4]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#17: Count True Values: Write a function that takes an array of booleans and counts the number of true values.

const countTrue = (arr) =>
  arr.reduce((result, current) => (current ? (result += 1) : result), 0);
console.log(countTrue([true, false, true, false, true]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#18: Group Anagrams: Write a function that groups strings that are anagrams of each other from an array of strings

const groupAnagrams = (arr) => {
  const visited = [];
  const grouping = [];
  arr.forEach((item) => {
    if (!visited.includes(item)) {
      const subGroup = [];
      arr.forEach((anotherItem) => {
        const firstItem = item.split('').sort().join('');
        const secondItem = anotherItem.split('').sort().join('');
        if (firstItem === secondItem) {
          subGroup.push(anotherItem);
          visited.push(anotherItem);
        }
      });
      grouping.push(subGroup);
    }
  });
  return grouping;
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#19: Flatten Nested Arrays: Write a function that recursively flattens an array of arbitrary depth.

const flatten = (arr) => {
  const newArr = [];
  const stack = [...arr];
  while (stack.length > 0) {
    const check = stack.pop();
    if (Array.isArray(check)) stack.push(...check);
    else newArr.unshift(check);
  }
  return newArr;
};
console.log(flatten([1, [2, [3, [4, [5]]]]]));

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Question#20: Find Most Frequent Element: Write a function that finds the most frequent element in an array. If there is a tie, return the smallest number.

const mostFrequent = (arr) => {
  let mostFrequentItem;
  let mostFrequentCount = 0;
  arr.forEach((item) => {
    let count = 0;
    arr.forEach((anotherItem) => {
      if (item === anotherItem) count++;
      if (count > mostFrequentCount) {
        mostFrequentCount = count;
        mostFrequentItem = item;
      }
    });
  });
  return mostFrequentItem;
};
console.log(mostFrequent([1, 2, 3, 3, 2, 1, 3]));
