function solution(numbers, hand) {
  const answer = [];
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const fixedAnswer = {
    1: 'L',
    4: 'L',
    7: 'L',
    3: 'R',
    6: 'R',
    9: 'R',
  };

  const location = {
    L: [3, 0],
    R: [3, 2],
  };

  for (let num of numbers) {
    if (Object.keys(fixedAnswer).includes(num.toString())) {
      answer.push(fixedAnswer[num]);
      location[fixedAnswer[num]] = keypad[num];
      continue;
    }

    const numLocation = keypad[num];
    const leftToNum =
      ((numLocation[0] - location['L'][0]) ** 2) ** 0.5 +
      ((numLocation[1] - location['L'][1]) ** 2) ** 0.5;
    const rightToNum =
      ((numLocation[0] - location['R'][0]) ** 2) ** 0.5 +
      ((numLocation[1] - location['R'][1]) ** 2) ** 0.5;

    if (leftToNum < rightToNum) {
      answer.push('L');
      location['L'] = numLocation;
    } else if (rightToNum < leftToNum) {
      answer.push('R');
      location['R'] = numLocation;
    } else {
      answer.push(hand.toUpperCase()[0]);
      location[hand.toUpperCase()[0]] = numLocation;
    }
  }

  return answer.join('');
}

const sol = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
console.log(sol);
