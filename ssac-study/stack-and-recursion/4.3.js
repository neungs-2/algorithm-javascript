const inputString = '{[()]}';

function isValidParen(input) {
  const stack = [];
  const inputStack = input.split('');
  const parenthesis = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  if (inputStack.length % 2 === 1) return false;

  for (let i = 0; i < inputStack.length; i++) {
    stack.push(inputStack.pop());
  }

  while (stack.length !== 0) {
    if (parenthesis[stack.pop()] !== inputStack.pop()) return false;
  }

  return true;
}

console.log(isValidParen(inputString));
