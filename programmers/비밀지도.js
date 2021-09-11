function solution(n, arr1, arr2) {
  var answer = [];

  function transformBinary(arr) {
    const newArr = [];
    for (let i of arr) {
      newArr.push(i.toString(2));
    }
    return newArr;
  }

  const binaryArr1 = transformBinary(arr1);
  const binaryArr2 = transformBinary(arr2);

  function addBinary(array1, array2) {
    const additionArray = [];
    for (let i; i < array1.length; i++) {
      additionArray.push(Number(array1[i]) + Number(array2[i]));
    }
    return additionArray;
  }

  const additionArr = addBinary(binaryArr1, binaryArr2);
  console.log(additionArr);

  additionArr.forEach(function (element) {
    let secretCode = '';
    for (let digit of String(element)) {
      if (digit !== '0') secretCode + '#';
      else secretCode + ' ';
    }
    answer.push(secretCode);
  });

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
