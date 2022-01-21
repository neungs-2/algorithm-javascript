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
//--> ZeroCho님 코드보고 다시 구현해보기
const partition = (arr, left, right, pivot) => {
  let swap;
  
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;

    if (left <= right) {
      swap = arr[left];
      arr[left] = arr[right];
      arr[right] = swap;
      left++;
      right--;
    }
  }
  return left;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const pivot = arr[parseInt(arr.length / 2)];
  const partition = divide(arr, left, right, pivot);

  quickSort(arr, left, partition - 1);
  quickSort(arr, partition, right);

  
  return arr;
}


const answer = quickSort([5, 1, 1, 0, 0]);
console.log(answer);
