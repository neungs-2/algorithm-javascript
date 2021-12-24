function solution(arr1, arr2) {
  let answer = [];

  for (let row = 0; row < arr1.length; row++) {
    answer.push(arr1[row].map((value, col) => value + arr2[row][col]));
  }

  return answer;
}

function simpleSolution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

const a = [
  [1, 2],
  [2, 3],
];
const b = [
  [3, 4],
  [5, 6],
];

console.log(solution(a, b));
console.log(simpleSolution(a, b));
