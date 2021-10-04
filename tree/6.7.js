function findThird(array) {
  if (array.length < 3) {
    return Math.max(...array);
  }

  const set = new Set(array);
  const result = new Array(...set);

  array.sort((a, b) => {
    return b - a;
  });

  console.log(result);
  return result[2];
}

const dataArr = [4, 2, 7, 9, 7, 2, 5];
const dataArr2 = [1, 5];
console.log(findThird(dataArr));
console.log(findThird(dataArr2));
