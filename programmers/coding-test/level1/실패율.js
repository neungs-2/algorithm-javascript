const solution = (N, stages) => {
  const failureRate = [];

  for (let i = 1; i <= N; i++) {
    const stoppedPlayers = stages.filter((stage) => stage === i).length;
    const reachedPlayers = stages.filter((stage) => stage >= i).length;
    failureRate.push(stoppedPlayers / reachedPlayers);
  }

  const failureObject = Object.entries({ ...failureRate }).reduce(
    (obj, [key, val]) => ({ ...obj, [val]: key }),
    {}
  );
  console.log(failureObject, { ...failureRate });
  failureRate.sort((a, b) => b - a);

  return failureRate.reduce(
    (answer, rate) => answer.push(failureObject[rate]),
    []
  );
};

console.log(solution(4, [4, 4, 4, 4, 4]));
