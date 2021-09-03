const NUMS1 = [1, 3, 5, 7];
const NUMS2 = [2, 4, 8];

const changesElement = (variable1, variable2) => {
  let movedElement = variable1;
  variable1 = variable2;
  variable2 = movedElement;

  return [variable1, variable2];
};

const sortsArray1 = (array1, array2) => {
  for (let j = 0; j < array2.length; j++) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] >= array2[j]) {
        [array1[i], array2[j]] = changesElement(array1[i], array2[j]);
      }
    }
  }

  return { num1: array1, num2: array2 };
};

const sortsArray2 = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = changesElement(array[i], array[i + 1]);
    }
  }

  return array;
};

if (NUMS1[-1] <= NUMS2[0]) {
  console.log(NUMS1, NUMS2);
} else {
  let sortedNum1 = sortsArray1(NUMS1, NUMS2);
  let sortedNum2 = sortsArray2(sortedNum1.num2);
  console.log(sortedNum1.num1, sortedNum2);
}
