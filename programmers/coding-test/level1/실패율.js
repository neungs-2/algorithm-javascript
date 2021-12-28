const solution = (N, stages) => {
  const failureRate = [];
  const answer = [];

  for (let i = 1; i <= N; i++) {
    const stoppedPlayers = stages.filter((stage) => stage === i).length;
    const reachedPlayers = stages.filter((stage) => stage >= i).length;
    const rate = reachedPlayers !== 0 ? stoppedPlayers / reachedPlayers : 0;
    failureRate.push(rate);
  }

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const failureObject = { ...failureRate };
  failureRate
    .sort((a, b) => b - a)
    .forEach((rate) => {
      const stage = getKeyByValue(failureObject, rate);
      answer.push(1 + Number(stage));
      failureObject[stage] = 'already used';
    });

  return answer;
};

// 2차원 배열 사용한 답안
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);

  return result.map((x) => x[0]);
}
