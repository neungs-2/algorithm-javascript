// n을 k진법 변환했을 때 0으로 자른 수가 소수인 것

function solution(n, k) {
  var answer = 0;

  const kNotation = n.toString(k);
  const numArray = kNotation.split('0').filter((num) => num != '');
  const primeCheck = [false, false];

  for (let i = 2; i < Math.max(...numArray); i++) {
    primeCheck.push(true);
  }

  for (let i = 2; i < primeCheck.length; i++) {
    if (primeCheck[i]) {
      for (let j = i * i; j <= Math.max(...numArray); j += i) {
        primeCheck[j] = false;
      }
    }
  }

  for (let i = 0; i < primeCheck.length; i++) {
    if (primeCheck[i] === true) primeCheck[i] = i;
  }

  const primeArray = primeCheck.filter((element) => element !== false);
  numArray.map((num) => {
    if (primeArray.includes(num)) answer++;
  });

  return answer;
}
