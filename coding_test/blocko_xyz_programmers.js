function solution(N) {
  let result = 0;
  let range;

  if (N % 2 === 0) {
    range = N / 2;
  } else {
    range = (N - 1) / 2;
  }

  for (let besidePair = 0; besidePair < range + 1; besidePair++) {
    numOfCombinations =
      getFactorial(N - besidePair) /
      getFactorial(N - 2 * besidePair) /
      getFactorial(besidePair);
    result += numOfCombinations;
  }

  return result;
}

const getFactorial = (n) => {
  let factorial = 1;

  for (let i = 2; i < n + 1; i++) {
    factorial *= i;
  }

  return factorial;
};
