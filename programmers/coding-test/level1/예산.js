const solution = (d, budget) => {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => count + ((budget -= price) >= 0), 0);
};

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
