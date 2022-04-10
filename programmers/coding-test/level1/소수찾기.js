const solution = (n) => {
  const wholeNum = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (wholeNum[i]) {
      for (let j = i * i; j <= n; j += i) {
        wholeNum[j] = false;
      }
    }
  }

  return wholeNum.filter((n) => n).length;
};
