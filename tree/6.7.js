function findThird(array) {
  if (array.length < 3) {
    return Math.max(...array);
  }

  array.sort((a, b) => {
    if (a > b) return -1;
    if (a === b) return 0;
    if (a < b) return 1;
  });

  return array[2];
}

const dataArr = [4, 2, 7, 9, 6];
const dataArr2 = [1, 5];
console.log(findThird(dataArr));
console.log(findThird(dataArr2));
