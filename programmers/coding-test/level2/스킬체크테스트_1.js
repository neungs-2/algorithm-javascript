function solution(s) {
  const numberArray = s.split(' ').map((str) => Number(str));
  const max = Math.max(...numberArray);
  const min = Math.min(...numberArray);
  return `${min} ${max}`;
}

console.log(solution('1 2 3 4'));
