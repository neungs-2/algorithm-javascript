/**
 * 직사각형 모양 테이블에서 이웃하거나 마주보고 앉은 사람과 악수한다면 악수를 할 수 있는 경우의 수
 * 해결 Idea: 테이블 한 면만 생각한다면 이웃한 악수(2명), 마주본 악수 (1명)의 2가지 악수법 존재 --> 자리배치 문제
 * @param {number} N 한 변에 앉은 사람 수 
 * @returns {number} 총 악수의 개수
 */
function solution(N) {
  let result = 0;
  let range;

  if (N % 2 === 0) {
    range = N / 2;
  } else {
    range = (N - 1) / 2;
  }

  // (N-x)! / (N - 2x)! / x!  (x는 양옆 쌍)
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
