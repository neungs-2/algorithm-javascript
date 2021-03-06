function solution(record) {
  const answer = [];
  const userObj = {};

  for (let i = 0; i < record.length; i++) {
    const logSplitArr = record[i].split(' ');
    if (logSplitArr[0][0] === 'E' || logSplitArr[0][0] === 'C') {
      userObj[logSplitArr[1]] = logSplitArr[2];
    }
  }

  for (let i = 0; i < record.length; i++) {
    const logSplitArr = record[i].split(' ');

    if (logSplitArr[0] === 'Enter') {
      answer.push(`${userObj[logSplitArr[1]]}님이 들어왔습니다.`);
    } else if (logSplitArr[0] === 'Leave') {
      answer.push(`${userObj[logSplitArr[1]]}님이 나갔습니다.`);
    }
  }

  return answer;
}

// Refactoring - 코드 가독성을 향상
function solution2(record) {
  const userObj = {};
  const action = [];
  const comment = { Enter: '님이 들어왔습니다.', Leave: '님이 나갔습니다.' };

  record.forEach((log) => {
    const [state, id, nick] = log.split(' ');

    if (state !== 'Change') {
      action.push([state, id]);
    }

    if (state === 'Enter' || state === 'Change') {
      userObj[id] = nick;
    }
  });

  return action.map(([state, id]) => `${userObj[id]}${comment[state]}`);
}

console.log(
  solution2([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
