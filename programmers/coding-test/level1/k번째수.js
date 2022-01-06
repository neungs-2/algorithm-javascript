function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    const [i, j, k] = command;
    const sliceSortedArr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sliceSortedArr[k - 1]);
  });

  return answer;
}

// Refactoring
function solution(array, commands) {
  return commands.map((command) => {
    const [from, to, pick] = command;
    return array.slice(from - 1, to).sort((a, b) => a - b)[pick - 1];
  });
}
