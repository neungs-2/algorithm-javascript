// let start = new Date();
const nums = [2, 7, 10, 19];
const target = 9;
let result = [];

Loop1: for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      result.splice(0, 0, i, j);
      break Loop1;
    }
  }
}

console.log(result);
// let end = new Date();
// console.log(end - start);
// 4ms
