function solution(n) {
  let answer = 1 + n;

  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) {
      answer += i + n / i;
    }
  }

  if (n ** 0.5 % 1 === 0) {
    answer += n ** 0.5;
  }

  return answer;
}

console.log(solution(12));
