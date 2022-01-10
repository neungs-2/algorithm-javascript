function solution(numbers) {
  let answer = '';
  const fourDigitObj = {};
  const fourDigitNumArr = numbers.map((num, idx) => {
    let stringNum = '' + num;
    while (stringNum.length < 4) {
      stringNum += stringNum;
    }
    const fourDigitNum = stringNum.slice(0, 4);
    fourDigitObj[fourDigitNum] = idx;
    return fourDigitNum;
  });

  fourDigitNumArr.sort((a, b) => b - a);
  fourDigitNumArr.forEach((val) => (answer += numbers[fourDigitObj[val]]));

  if (answer[0] === '0') return 0;
  return answer;
}

const sol = solution([0, 0, 0, 0]);
console.log(sol);
