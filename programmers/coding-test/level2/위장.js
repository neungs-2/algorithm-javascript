function solution(clothes) {
  const clothesNumObj = {};
  clothes.forEach(
    (arr) => (clothesNumObj[arr[1]] = (clothesNumObj[arr[1]] || 1) + 1)
  );

  const clothesNumArr = [...Object.values(clothesNumObj)];
  return clothesNumArr.reduce((pre, curr) => pre * curr, 1) - 1;
}

const m = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

console.log(solution(m));
