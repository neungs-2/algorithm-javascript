// 각 유저 한번에 한명 유저 신고
// 횟수 제한 X, 동일 유저 신고 1회처리 --> 신고 사람 수가 중요
//k번 이상(k명에게) 신고시 정지
// 신고자에게 정지한 경우만 메일 발송

function solution(id_list, report, k) {
  const suspendedUserArray = [];
  let userReportDict = {};
  let reportCntDict = {};
  var answer = [];

  id_list.map((id) => {
    userReportDict[id] = [];
    reportCntDict[id] = 0;
  });

  report.map((ids) => {
    const reportDetail = ids.split(' ');
    userReportDict[reportDetail[0]].push(reportDetail[1]);
  });

  for (let i = 0; i < id_list.length; i++) answer.push(0);

  for (let reporter of id_list) {
    userReportDict[reporter].map((reportedUser) => {
      reportCntDict[reportedUser]++;
    });
  }

  for (let id of id_list) {
    if (reportCntDict[id] >= k) suspendedUserArray.push(id);
  }

  id_list.map((id) => {
    const userReport = new Set(userReportDict[id]);
    for (suspendedUser of suspendedUserArray) {
      if ([...userReport].includes(suspendedUser)) {
        answer[id_list.indexOf(id)]++;
      }
    }
  });

  return answer;
}

// const result = solution(
//   ['muzi', 'frodo', 'apeach', 'neo'],
//   ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
//   2
// );
// console.log(result);
