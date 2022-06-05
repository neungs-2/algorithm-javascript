function solution(w, h) {
  const totalSquare = w * h;
  let dividend = Math.max(w, h);
  let divisor = w === dividend ? h : w;

  while (divisor !== 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  const gcd = dividend;
  return totalSquare - (w + h - gcd);
}

console.log(solution(8, 12));

//https://movingmountain.tistory.com/183?category=951316
// 직접 식 도출하지 못했음. 다시 풀어볼 것.
