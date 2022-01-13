function solution(s) {
  s = s.toLowerCase();
  const numArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < numArr.length; i++) {
    const regExp = new RegExp(numArr[i], 'gi');
    s = s.replace(regExp, String(i));
  }

  return s;
}

console.log(solution('foursixfour'));
