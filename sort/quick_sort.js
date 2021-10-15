const quickSort = (arr = []) => {
  if (arr.length < 2) return arr;

  const pivot = arr[parseInt(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i of arr) {
    if (i < pivot) {
      left.push(i);
    } else if (i > pivot) {
      right.push(i);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const array = [8, 2, 6, 4, 5, 8];
const a = quickSort(array);
console.log(a);
