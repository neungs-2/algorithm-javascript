const solution = (a, b, n) => {
  let wholeBottles = n;
  let restOfBottle = 0;
  let answer = 0;

  while (wholeBottles / a >= 1) {
    answer += parseInt(wholeBottles / a) * b;
    restOfBottle = wholeBottles % a;
    wholeBottles = parseInt(wholeBottles / a) * b + restOfBottle;
  }

  return answer;
};

// 참고할 풀이
const awesomeSolution = (a, b, n) =>
  Math.floor(Math.max(n - b, 0) / (a - b)) * b;
