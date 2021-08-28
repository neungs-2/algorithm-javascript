let nums = [0, 0, 0, 1, 2, 2, 2];
let cnt = 1;
let criteria = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (criteria != nums[i]) {
    nums[cnt] = nums[i];
    criteria = nums[i];
    cnt++;
  }
}

console.log(nums.splice(0, cnt));
console.log(cnt);
