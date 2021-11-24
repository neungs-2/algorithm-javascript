function solution(n, lost, reserve) {
  let lostExceptReserve = [];
  let reserveExceptLost = [];
  let answer = 0;
  // 안되면 정렬해보기

  for (const i of lost) {
    if (i in reserve) {
      lostExceptReserve = lost.filter((e) => e !== i);
      reserveExceptLost = reserve.filter((e) => e !== i);
    }
  }

  console.log(lostExceptReserve);
  console.log(reserveExceptLost);

  for (const lostStudent of lostExceptReserve) {
    if (
      (lostStudent - 1 in reserveExceptLost) |
      (lostStudent + 1 in reserveExceptLost)
    ) {
      const lostIdx = lostExceptReserve.indexOf(lostStudent);
      const reserveIdx = reserveExceptLost.indexOf(lostStudent);
      lostExceptReserve.splice(lostIdx - 1, 1);
      reserveExceptLost.splice(reserveIdx - 1, 1);
    }
  }

  anwser = [...Array(n).keys()].unshift().filter(!(e in lostExceptReserve));

  return answer;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
