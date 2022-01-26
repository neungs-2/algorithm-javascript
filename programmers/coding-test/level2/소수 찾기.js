const findPrime = (range) => {
  const primeArr = [];

  for (let num = 0; num <= range; num++) {
    primeArr.push(num);
  }

  for (let i = 2; i * i < range; i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= range; j += i) {
        primeArr[j] = false;
      }
    }
  }

  primeArr.fill(false, 0, 2);

  return primeArr.filter((v) => v !== false);
};

const findRange = (numString) => {
  const max = numString
    .split('')
    .sort((a, b) => b - a)
    .join('');

  return Number(max);
};

const getPermutations = (arr, selectNum = arr.length) => {
  const permutArr = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixer, idx, origin) => {
    const restArr = origin.filter((_, index) => index !== idx);
    const permutationArr = getPermutations(restArr, selectNum - 1);
    const attachedFixer = permutationArr.map((v) => [fixer, ...v]);

    permutArr.push(...attachedFixer);
  });

  return permutArr;
};

const solution = (numbers) => {
  const wholePermuts = [];
  const range = findRange(numbers);
  const primeArr = findPrime(range);
  const digitArr = numbers.split('');

  for (let selectNum = 1; selectNum <= numbers.length; selectNum++) {
    const permutArr = getPermutations(digitArr, selectNum).map((arr) =>
      Number(arr.join(''))
    );
    wholePermuts.push(...permutArr);
  }

  const duplDelArr = [...new Set(wholePermuts)];
  const answer = duplDelArr.filter((val) => primeArr.includes(val));

  return answer.length;
};

console.log(solution('17'));
