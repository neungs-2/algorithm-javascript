function bubbleSort(arr = []) {
  for (i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      // let [front, back] = [arr[j], arr[j + 1]];

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const array = [5, 2, 1, 3, 4];
console.log(bubbleSort(array));
console.log(bubbleSort());
