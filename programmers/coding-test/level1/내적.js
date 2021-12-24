function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

// reduce를 활용한 풀이
const solution = (a, b) => a.reduce((acc, cur, i) => (acc += cur * b[i]), 0);
