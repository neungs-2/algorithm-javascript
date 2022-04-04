const solution = (a, b) => {
  const dayObject = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const monthlyNumOfDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDate = b;

  for (let i = 0; i < a - 1; i++) {
    totalDate += monthlyNumOfDate[i];
  }

  // const totalDate = monthlyNumOfDate.reduce(
  //   (pre, cur, idx) =>
  //     idx < a - 1 ? pre + cur : idx === a - 1 ? pre + b : pre,
  //   0
  // );

  return dayObject[totalDate % 7];
};
