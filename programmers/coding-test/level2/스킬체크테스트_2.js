function solution(priorities, location) {
  const printer = Array.from({ length: priorities.length }, (v, i) => i);
  let printout;
  let cnt = 0;

  while (printout !== location) {
    const target = printer.shift();
    const nonTargetsLength = printer.length;

    for (let nonTarget of printer) {
      if (priorities[target] < priorities[nonTarget]) {
        printer.push(target);
        break;
      }
    }

    if (nonTargetsLength === printer.length) {
      printout = target;
      ++cnt;
    }
  }

  return cnt;
}

console.log(solution([2, 1, 3, 2], 1));
