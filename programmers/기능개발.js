function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length > 0) {
    let cnt = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] + speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }

    if (cnt !== 0) answer.push(cnt);
  }

  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds));
