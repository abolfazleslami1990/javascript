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
