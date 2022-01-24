function solution(n, arr1, arr2) {
  const binaryArr = [];

  for (let i = 0; i < n; i++) {
    let bitwiseOr = (arr1[i] | arr2[i]).toString(2);
    if (bitwiseOr.length !== n) {
      bitwiseOr = '0'.repeat(n - bitwiseOr.length) + bitwiseOr;
    }
    binaryArr.push(bitwiseOr);
  }

  const answer = binaryArr.map((v) => v.replace(/1/g, '#').replace(/0/g, ' '));

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
