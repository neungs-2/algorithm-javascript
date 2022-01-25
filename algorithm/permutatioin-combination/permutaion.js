const getPermutations = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixer, idx, originArr) => {
    // rest = arr 이면 중복 순열, 인덱스가 다른 동일값을 다른 값으로 보려면 filter를 idx로 걸기
    const rest = originArr.filter((v) => v !== fixer);
    const permutations = getPermutations(rest, selectNum - 1);
    const combineFixer = permutations.map((v) => [fixer, ...v]);

    result.push(...combineFixer);
  });

  return result;
};

console.log(getPermutations([1, 2, 3, 4, 5], 3));
