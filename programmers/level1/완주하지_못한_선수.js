// 정렬 후 비교 
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 가장 성능이 좋았음
function Solution(participant, completion) {
  let dic = completion.reduce(
    (obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj),
    {}
  );
  return participant.find((t) => {
    if (dic[t]) dic[t] = dic[t] - 1;
    else return true;
  });
}

// 두번 째와 같은 로직이지만 arrow function 사용
const simpleSolution = (participant, completion) =>
  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  );
