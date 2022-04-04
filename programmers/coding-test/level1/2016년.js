const solution = (a, b) => {
  const dayObject = {
    1: 'FRI',
    2: 'SUN',
    3: 'SAT',
    4: 'MON',
    5: 'TUE',
    6: 'WED',
    7: 'THU',
  };

  const monthlyNumOfDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const totalDate = monthlyNumOfDate.reduce(
    (pre, cur, idx) =>
      idx < a - 1 ? pre + cur : idx === a - 1 ? pre + b : pre,
    0
  );

  return dayObject[totalDate % 7];
};

console.log(solution(3, 4));
