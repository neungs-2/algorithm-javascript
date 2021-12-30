const mergeSort = (arr = []) => {
  if (arr.length < 2) return arr;

  const half = parseInt(arr.length / 2);
  const frontArr = arr.slice(0, half);
  const backArr = arr.slice(half, arr.length);

  const sortedFront = mergeSort(frontArr);
  const sortedBack = mergeSort(backArr);

  return merge(mergeSort(frontArr), mergeSort(backArr));
};

const merge = (frontArr, backArr) => {
  let result = [];

  while (frontArr.length && backArr.length) {
    if (frontArr[0] <= backArr[0]) {
      result.push(frontArr.shift());
    } else {
      result.push(backArr.shift());
    }
  }

  if (!frontArr.length) {
    result = [...result, ...backArr];
  } else {
    result = [...result, ...frontArr];
  }

  return result;
};

const array = [3, 5, 6, 2, 4, 1, 7];
console.log(mergeSort(array));
