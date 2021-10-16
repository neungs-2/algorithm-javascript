function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    const abs = signs[i] === true ? absolutes[i] : -absolutes[i];
    answer += abs;
  }
  return answer;
}

console.log(solution([4, 7, 12][(true, false, true)]));
