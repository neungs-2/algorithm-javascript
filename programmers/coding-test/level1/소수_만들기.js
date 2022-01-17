const solution = (nums) => {
  const combinationArr = [];

  const makePrime = (length) => {
    const arr = [];

    for (let i = 0; i <= length; i++) arr.push(true);
    arr[0] = arr[1] = false;

    for (let i = 2; i * i <= length; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= length; j += i) {
          arr[j] = false;
        }
      }
    }

    return arr
      .map((v, i) => {
        if (v) return i;
      })
      .filter((val) => val !== undefined);
  };

  const dfs = (nums, num = 0, arr = []) => {
    if (num === 3)
      combinationArr.push([...arr].reduce((pre, cur) => pre + cur, 0));
    else {
      for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        dfs(nums.slice(i + 1), num + 1, arr);
        arr.pop();
      }
    }
  };

  const primeArr = makePrime(2998);
  dfs(nums);

  const answer = combinationArr.filter((value) => primeArr.includes(value));

  return answer.length;
};

console.log(solution([1, 2, 3, 4]));
