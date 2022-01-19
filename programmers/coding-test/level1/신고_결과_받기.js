function solution(id_list, report, k) {
  const reportInfo = {};
  const numOfReported = {};

  report = [...new Set(report)];

  id_list.map((id) => {
    reportInfo[id] = [];
    numOfReported[id] = 0;
  });

  report.forEach((v) => {
    const reportArr = v.split(' ');
    reportInfo[reportArr[0]] = [...reportInfo[reportArr[0]], reportArr[1]];
    ++numOfReported[reportArr[1]];
  });

  const blockUser = Object.entries(numOfReported)
    .filter((arr) => arr[1] >= k)
    .reduce((pre, cur) => [...pre, cur[0]], []);

  Object.entries(reportInfo).map((arr) => {
    const num = arr[1].reduce((pre, cur) => {
      if (blockUser.includes(cur)) ++pre;
      return pre;
    }, 0);

    numOfReported[arr[0]] = num;
  });

  return Object.values(numOfReported);
}

const answer = solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2
);

console.log(answer);
