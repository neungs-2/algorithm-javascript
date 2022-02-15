function solution(n) {
  const answerArr = [];
  let quotient = n;
  let remainder = 0;

  while (quotient !== 0) {
    const dividend = quotient;
    quotient = Math.floor(quotient / 3);
    remainder = dividend - quotient * 3;

    if (remainder === 0) {
      quotient -= 1;
      remainder = 4;
    }

    answerArr.unshift(remainder);
  }

  return answerArr.join('');
}
