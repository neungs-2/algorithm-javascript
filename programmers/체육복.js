function solution(n, lost, reserve) {
  var answer = 0;

  // reserve 학생 중 lost 포함은 두 Arr에서 제외
  const reserveButLost = reserve.filter((student) => lost.includes(student));
  reserve = reserve.filter((student) => !reserveButLost.includes(student));
  lost = lost.filter((student) => !reserveButLost.includes(student));

  // lost 학생 Loop 돌며 -+1 번호 reserve 존재 확인 후 pop
  for (lostStudent of lost) {
    if (lostStudent - 1 in reserve) {
      lost.splice(lost.indexOf(lostStudent), 1);
      reserve.splice(reserve.indexOf(lostStudent - 1, 1));
    } else if (lostStudent + 1 in reserve) {
      lost.splice(lost.indexOf(lostStudent), 1);
      reserve.splice(reserve.indexOf(lostStudent + 1, 1));
    }
  }

  // n - lost.length 구하기
  answer = n - lost.length;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
