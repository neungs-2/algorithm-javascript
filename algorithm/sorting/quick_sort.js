// 분할 정복법 전략을 사용
// 임의의 pivot을 기준으로 각 수의 크기를 비교하여 좌우에 정렬
// 위의 방법을 반복
// 주로 별도 메모리 공간이 필요 없는 in place 방법을 주로 사용
// 시간 복잡도: 평균 O(NlogN), 최악 O(N^2)

// non In Place
const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[parseInt(arr.length / 2)];
  const left = [];
  const right = [];
  const mid = [];

  for (let value of arr) {
    if (value < pivot) left.push(value);
    else if (value > pivot) right.push(value);
    else mid.push(value);
  }

  return [...quickSort(left), ...mid, ...quickSort(right)];
};

// In Place
const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const partition = (arr, left, right, pivotIdx) => {
  const pivot = arr[pivotIdx];

  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  swap(arr, left, pivotIdx);
  return left;
};

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  let pivotIdx = right;
  pivotIdx = partition(arr, left, right - 1, pivotIdx);

  if (left < pivotIdx - 1) quickSort(arr, left, pivotIdx - 1);
  if (right > pivotIdx + 1) quickSort(arr, pivotIdx + 1, right);

  return arr;
}

const answer = quickSort([5, 1, 1, 0, 0]);
console.log(answer);
