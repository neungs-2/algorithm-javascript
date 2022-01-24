// 배열을 순회하며 min/max 값을 찾아서 맨 앞에 위치시킴
// 시간 복잡도 : O(n^2)

class SelectionSort {
  static swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

    return arr;
  };

  static sortArray = (arr, startIdx = 0) => {
    if (startIdx === arr.length) return arr;

    let minIdx = startIdx;
    let min = arr[minIdx];

    for (let i = startIdx; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIdx = i;
      }
    }
    this.swap(arr, startIdx, minIdx);
    this.sortArray(arr, startIdx + 1);

    return arr;
  };
}

const array = [4, 3, 6, 2, 7, 3, 3, 1];
console.log(SelectionSort.sortArray(array));
