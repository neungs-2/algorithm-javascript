function euclidean(a, b) {
  while (b > 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

// 재귀를 이용한 방법
function recursionEuclidean(p, q) {
  if (q === 0) return p;
  return euclidean(q, p % q);
}
