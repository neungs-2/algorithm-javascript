function solution(clothes) {
  let answer = 0;

  //TODO: 처음 문제 조건 잘 못 읽음 --> clothesNumber 함수 수정하기
  const clothesNumArr = clothes.reduce(
    (numOfClothes, curr) => [...numOfClothes, curr.length],
    []
  );

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

  for (let numOfType = 1; numOfType <= clothes.length; numOfType++) {
    const cases = combination(clothesNumArr, numOfType);
    for (let i = 0; i < cases.length; i++) {
      const numOfCases = cases[i].reduce((pre, curr) => (pre *= curr), 1);
      answer += numOfCases;
    }
  }

  return answer;
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
