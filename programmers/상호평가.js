function solution(scores) {
  const scoresArr = [...scores];
  const avgScores = [];
  let answer = '';

  function mean(array) {
    const avg = array.reduce((a, b) => a + b, 0) / array.length;
    return avg;
  }

  for (let i = 0; i < scores.length; i++) {
    const selfScore = scoresArr[i][i];
    scoresArr.splice(i, 1);
    if (
      selfScore === Math.max(...scoresArr[i]) ||
      selfScore === Math.min(...scoresArr[i])
    ) {
      avgScores.push[mean(scoresArr[i])];
    } else {
      avgScores.push[mean(scores[i])];
    }
  }

  for (let avg of avgScores) {
    if (avg >= 90) {
      answer += 'A';
    } else if (avg >= 80) {
      answer += 'B';
    } else if (avg >= 70) {
      answer += 'C';
    } else if (avg >= 50) {
      answer += 'D';
    } else {
      answer += 'F';
    }
  }

  return answer;
}

const a = solution([
  [50, 90],
  [50, 87],
]);

console.log(a);
