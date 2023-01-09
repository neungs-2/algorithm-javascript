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
