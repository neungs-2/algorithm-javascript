function solution(orders, course) {
  const answer = [];
  const splitOrders = orders.map((arr) => arr.split(''));

  for (let i = 0; i < course.length; i++) {
    const countObject = {};

    for (let j = 0; j < orders.length; j++) {
      const courseCombinations = getCombinations(splitOrders[j], course[i]);
      courseCombinations.map((combination) => {
        const key = combination.sort().join('');

        if (!countObject[key]) {
          countObject[key] = 1;
        } else {
          ++countObject[key];
        }
      });
    }

    const countEntries = Object.entries(countObject).sort(
      (a, b) => b[1] - a[1]
    );

    const maxCount = countEntries[0] ? countEntries[0][1] : 0;
    const maxCombinations = countEntries.filter(
      (entry) => entry[1] === maxCount && entry[1] > 1
    );
    answer.push(...maxCombinations.map((arr) => arr[0]));
  }

  return answer.sort();
}

const getCombinations = (array, selectNum) => {
  const result = [];

  if (selectNum === 1) {
    return array.map((v) => [v]);
  }

  array.forEach((value, index, arr) => {
    const fixedValue = value;
    const rest = arr.slice(index + 1);
    const combinationExceptFixedValue = getCombinations(rest, selectNum - 1);
    const combination = combinationExceptFixedValue.map((v) => [
      fixedValue,
      ...v,
    ]);

    result.push(...combination);
  });

  return result;
};

const answer = solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]);
console.log(answer);
