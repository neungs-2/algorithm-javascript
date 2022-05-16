// 정규 표현식을 사용한 풀이
// match 메서드에서 찾는 값이 없으면 null 값이 나오므로 빈 배열 나오게 설정함
function solution1(s) {
  const lowerCase = s.toLowerCase();
  return (lowerCase.match(/p/g) || []).length ===
    (lowerCase.match(/y/g) || []).length
    ? true
    : false;
}

// solution1에서 lowerCase 변환을 생략
// 정규식 옵션 사용
function solution2(s) {
  return (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length
    ? true
    : false;
}

// 삼항연산자를 생략 (가장 성능 좋음)
const solution3 = (s) =>
  (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length || 0;

// Loop를 활용한 풀이 -> 너무 느림
function solution3(s) {
  const lowerCase = s.toLowerCase();
  let numOfP = 0;
  let numOfY = 0;

  for (let i = 0; i < s.length; i++) {
    if (lowerCase[i] === 'p') ++numOfP;
    else if (lowerCase[i] === 'y') ++numOfY;
  }

  return numOfP === numOfY ? true : false;
}
