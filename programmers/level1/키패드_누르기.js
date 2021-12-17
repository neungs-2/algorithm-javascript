function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const fixedAnswer = {
    1: 'L',
    4: 'L',
    7: 'L',
    3: 'R',
    6: 'R',
    9: 'R',
  };

  const location = {
    left: [3, 0],
    right: [3, 2],
  };
  console.log(keypad[0][2]);
}

solution();
