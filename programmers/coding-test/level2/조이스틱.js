const solution = (name) => {
  let ctrlCnt = 0;
  let moveCnt = 0;

  for (let i = 0; i < name.length; i++) {
    let ascii = name.charCodeAt(i);

    if (ascii <= 78) ctrlCnt += ascii - 65;
    else ctrlCnt += 91 - ascii;
  }

  name.replace('/A+/g', 'A');
  if (name.charCodeAt(1) === 65) return (ctrlCnt += name.length - 1);

  return ctrlCnt + moveCnt;
};

console.log(solution('JAN'));

/*
TODO:
알파벳에 따른 이동 방법
'BATMAN','BADBOY', 'BAAADBOY' --> 뒤쪽으로 세는 것이 빠름
'SPIDERMAN', 'MAMA', 'BATMA' --> 앞/뒤 방향 동일
'BATMAAAA' --> 앞쪽으로 세는 것이 빠름
'HOYAAAAAGO' --> 앞쪽으로 왔다가 다시 뒤로 가는 것이 빠름

IDEA: 'idx 1부터 A 반복' vs '마지막 A 반복 개수'
IDEA: '가운데 A개수' vs ' 앞옆 알파벳 개수'

*/
