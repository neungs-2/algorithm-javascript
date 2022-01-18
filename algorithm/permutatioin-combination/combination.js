// Combination (조합)
// 주어진 수 N개 중 k개를 뽑는다고 할 때의 로직
// 배열에서 1개 수 선택 --> 선택한 수 제외한 배열에서 1개 선택 --> k개 수의 배열 생성
// 재귀를 이용하여 구현

function combination(numArr, selectNum) {
  const result = [];
  if (selectNum === 1) return numArr.map((v) => [v]);

  numArr.forEach((val, idx, arr) => {
    const fixed = val;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFixed = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFixed);
  });

  return result;
}

console.log(combination([1, 2, 3, 4, 5], 3));

// 재귀 호출 + dfs를 이용한 방법
let answer = [];

const dfs = (numArr, selectNum, arr = []) => {
  if (selectNum === 0) answer.push([...arr]);
  else {
    for (let i = 0; i < numArr.length; i++) {
      arr.push(numArr[i]);
      dfs(numArr.slice(i + 1), selectNum - 1, arr);
      arr.pop();
    }
  }
};

dfs([1, 2, 3, 4], 3);
console.log(answer);
