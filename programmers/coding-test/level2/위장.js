function solution(clothes) {
  let answer = 0;
  const clothesNumArr = numClothesOfType(clothes);

  for (let numOfType = 1; numOfType <= clothes.length; numOfType++) {
    const cases = combination(clothesNumArr, numOfType);
    for (let i = 0; i < cases.length; i++) {
      const numOfCases = cases[i].reduce((pre, curr) => (pre *= curr), 1);
      answer += numOfCases;
    }
  }

  return answer;
}

function numClothesOfType(matrix) {
  const type = {};

  matrix.forEach((arr) =>
    Object.keys(type).includes(arr[1]) ? ++type[arr[1]] : (type[arr[1]] = 1)
  );
  return Object.values(type);
}

function combination(arr, selectNum) {
  const result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((val, idx, arr) => {
    const fixed = val;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);

    result.push(...combineFix);
  });

  return result;
}

const m = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

console.log(solution(m));
