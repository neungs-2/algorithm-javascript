const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const solution = (numbers) =>
  zeroToNine
    .filter((num) => !numbers.includes(num))
    .reduce((pre, cur) => pre + cur, 0);
