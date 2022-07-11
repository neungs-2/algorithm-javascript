function solution(arr, divisor) {
  const answer = [];

  for (let dividend of arr.sort((a, b) => a - b)) {
    if (dividend % divisor === 0) {
      answer.push(dividend);
    }
  }

  return answer.length === 0 ? [-1] : answer;
}
