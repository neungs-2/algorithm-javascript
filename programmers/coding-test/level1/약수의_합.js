function solution(n) {
  let answer = 0;

  for (var i = 1; i * i <= n; i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }

  i--;

  return n / i === i ? answer - i : answer;
}
