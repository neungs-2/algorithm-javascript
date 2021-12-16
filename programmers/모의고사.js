function solution(answers) {
  const answer = [];
  const correctNumArr = [];
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let arr of [student1, student2, student3]) {
    let counter = 0;

    for (let i in answers) {
      if (answers[i] === arr[i % arr.length]) ++counter;
    }
    correctNumArr.push(counter);
  }

  const max = Math.max(...correctNumArr);
  let idx = correctNumArr.indexOf(max);

  while (idx != -1) {
    answer.push(idx + 1);
    idx = correctNumArr.indexOf(max, idx + 1);
  }

  return answer;
}

// _____________________ 다른 풀이 ________________________

function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
