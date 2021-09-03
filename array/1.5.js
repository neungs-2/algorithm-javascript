const NUMS = [1, 2, 4, 6];
const TARGET = 3;

let gPointer = Math.floor(NUMS.length / 2);
let gScopeLength = Math.floor(NUMS.length / 2);
let gPreviousPointer = 0;
let gCheckResult;

const checkBothSide = (array, target, pointer) => {
  if (array[pointer - 1] < target < array[pointer]) {
    console.log(pointer);
  } else if (array[pointer] < target < array[pointer + 1]) {
    console.log(pointer + 1);
  }
};

const checkAnswer = (array, target, pointer, scopeLength) => {
  if (target === array[pointer]) {
    console.log(pointer);
  } else if (array[pointer - 1] < target < array[pointer + 1]) {
    checkBothSide(array, target, pointer);
  } else if (target < array[pointer]) {
    scopeLength = Math.floor(scopeLength / 2);
    pointer = pointer - scopeLength;
  } else if (target > array[pointer]) {
    scopeLength = Math.floor(scopeLength / 2);
    pointer = pointer + scopeLength;
  }

  return [pointer, scopeLength];
};

while (true) {
  gPreviousPointer = gPointer;
  checkResult = checkAnswer(NUMS, TARGET, gPointer, gScopeLength);
  gPointer = checkResult[0];
  gScopeLength = checkResult[1];
  console.log(checkResult);
  console.log(gPointer, gScopeLength, gPreviousPointer);
  if (gPointer === gPreviousPointer) break;
}
