// 앞에서부터 2개 원소씩 묶어 비교를 하는 방식
// n번째 회차 종료시 뒤에서 n번째 원소가 결정
// in-place, stable
// 시간복잡도: Best O(n)  worst O(n^2)

class BubbleSort {
  static swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  static bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) this.swap(arr, j, j + 1);
      }
    }

    return arr;
  };
}

console.log(BubbleSort.bubbleSort([3, 5, 1, 2, 4, 6, 7]));
