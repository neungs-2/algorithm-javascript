const solution = (arr) => {
  const oddSum = arr.reduce((acc, cur) => {
    if (cur % 2 === 1) return acc + cur;
    else return acc;
  }, 0);

  const min = Math.min(...arr.filter((v) => v % 2 === 1));

  console.log(oddSum);
  console.log(min);
};

solution([12, 77, 38, 41, 53, 92, 85]);
