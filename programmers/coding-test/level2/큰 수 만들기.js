const solution = (number, k) => {
  const numArr = number.split('');
  const stack = [];
  let cnt = 0;
  let answer;

  for (let i = 0; i < numArr.length; i++) {
    while (k > cnt && numArr[i] > stack[stack.length - 1]) {
      stack.pop();
      ++cnt;
    }
    stack.push(numArr[i]);

    if (k === cnt) {
      answer = [...stack, ...numArr.slice(i + 1)];
      break;
    }
  }

  while (cnt !== k) {
    const delIdx = stack.indexOf(String(Math.min(...stack)));
    answer = [...stack.slice(0, delIdx), ...stack.slice(delIdx + 1)];
    ++cnt;
  }

  return answer.join('');
};

// Refatoring for performance
const solution = (number, k) => {
  const stack = [];
  let cnt = 0;

  for (let i = 0; i < number.length; i++) {
    const item = number[i];
    if (stack.length === 0) {
      stack.push(item);
      continue;
    }

    while (stack[stack.length - 1] < item) {
      stack.pop();
      cnt++;
      if (cnt === k) return stack.join('') + number.slice(i);
      if (stack.length === 0) break;
    }
    stack.push(item);
  }

  return stack.join('').slice(0, number.length - k + cnt);
};

console.log(solution('10000', 1));
