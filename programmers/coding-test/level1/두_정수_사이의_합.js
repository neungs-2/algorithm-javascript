const solution = (a, b) =>
  a === b
    ? a
    : Array.from(
        { length: Math.abs(a - b) + 1 },
        (v, i) => Math.min(a, b) + i
      ).reduce((pre, cur) => pre + cur, 0);

const solution2 = (a, b) => {
  if (a === b) return a;
  return Array.from(
    { length: Math.abs(a - b) + 1 },
    (v, i) => Math.min(a, b) + i
  ).reduce((pre, cur) => pre + cur, 0);
};

function solution3(a, b) {
  if (a === b) return a;
  return Array.from(
    { length: Math.abs(a - b) + 1 },
    (v, i) => Math.min(a, b) + i
  ).reduce((pre, cur) => pre + cur, 0);
}

// 제일 성능 좋은 코드
// 위의 로직은 reduce를 사용하기 위해 Array를 만드는 과정에서 시간소요가 큰 듯.
// 어차피 reduce도 내부에서 루프가 돌기 때문에 루프를 배제하기 위해 사용할 필요는 없을 듯.
function solution4(a, b) {
  if (a === b) return a;
  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}
