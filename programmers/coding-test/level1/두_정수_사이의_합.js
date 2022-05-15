const solution = (a, b) =>
  a === b
    ? a
    : Array.from(
        { length: Math.abs(a - b) + 1 },
        (v, i) => Math.min(a, b) + i
      ).reduce((pre, cur) => pre + cur, 0);

console.log(solution(3, 5));
