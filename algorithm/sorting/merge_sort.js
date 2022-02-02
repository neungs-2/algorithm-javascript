// 시간 복잡도 O(NlogN)

// 1. Array를 활용한 방법
// const t0 = performance.now();
const mergeSort = (arr) => {
  if (arr.length <= 2) return arr[0] <= arr[1] ? arr : [arr[1], arr[0]];

  let sortedArr = [];
  const divArr1 = arr.slice(0, Math.floor(arr.length / 2));
  const divArr2 = arr.slice(Math.floor(arr.length / 2));

  const mergeArr1 = mergeSort(divArr1);
  const mergeArr2 = mergeSort(divArr2);

  let lenCnt1 = 0,
    lenCnt2 = 0;

  while (lenCnt1 !== mergeArr1.length && lenCnt2 !== mergeArr2.length) {
    mergeArr1[lenCnt1] <= mergeArr2[lenCnt2]
      ? sortedArr.push(mergeArr1[lenCnt1++])
      : sortedArr.push(mergeArr2[lenCnt2++]);
  }
  sortedArr = [
    ...sortedArr,
    ...mergeArr1.slice(lenCnt1),
    ...mergeArr2.slice(lenCnt2),
  ];

  return sortedArr;
};

// const array = [];
// for (let i = 0; i < 1000; i++) {
//   array.push(parseInt(Math.random() * 1000));
// }
// console.log(mergeSort(array));
// const t1 = performance.now();
// console.log(t1 - t0); // 평균 5 ms
