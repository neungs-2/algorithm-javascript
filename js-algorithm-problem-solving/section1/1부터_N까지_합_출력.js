// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
function solution(N) {
  let answer = 0;
  for (let n = N; n > 0; n--) {
    answer += n;
  }
  return answer;
}

console.log(solution(10));

// Answer Sheet
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}
