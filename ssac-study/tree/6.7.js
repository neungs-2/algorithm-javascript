function findThird(array) {
  const result = [...new Set(array)];

  return array.length > 2 ? array.sort((a, b) => b - a)[2] : Math.max(...array);
}

const dataArr = [4, 2, 7, 9, 7, 2, 5];
const dataArr2 = [1, 5];
console.log(findThird(dataArr));
console.log(findThird(dataArr2));
