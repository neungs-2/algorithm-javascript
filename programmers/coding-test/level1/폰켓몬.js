function solution(nums) {
  const numToTake = parseInt(nums.length / 2);
  const setOfMonster = new Set(nums);

  return setOfMonster.size > numToTake ? numToTake : setOfMonster.size;
}

const ans = solution([3, 2, 1, 3, 4]);
console.log(ans);
