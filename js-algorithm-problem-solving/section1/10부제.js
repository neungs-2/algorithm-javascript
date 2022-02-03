const solution = (date, carNum) =>
  carNum.filter((num) => num % 10 === date).length;

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
