function solution(brown, yellow) {
  if ((brown + yellow) ** 0.5 % 1 === 0) {
    return [total ** 0.5 % 1, total ** 0.5 % 1];
  }

  const sidePair = [];

  for (let y = 1; y <= yellow ** 0.5; y++) {
    if (yellow % y === 0) {
      sidePair.push([yellow / y, y]);
    }
  }

  for (let pair of sidePair) {
    const [x, y] = pair;

    if (2 * (x + y + 2) === brown) {
      return pair;
    }
  }

  return 'Can not find answer';
}
