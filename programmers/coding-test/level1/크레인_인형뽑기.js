const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  var answer = 0;
  const basket = [];

  // 인형 grab 구현
  for (let m of moves) {
    for (let row of board) {
      if (row[m - 1] !== 0) {
        if (row[m - 1] === basket[basket.length - 1]) {
          row[m - 1] = 0;
          basket.pop();
          answer += 2;
          solution(board, moves);
          break;
        }

        basket.push(row[m - 1]);
        console.log(basket);
        row[m - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(solution(board, moves));
