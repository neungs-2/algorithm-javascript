// 시간 복잡도 O(NlogN)

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

console.log(mergeSort([3, 4, 5, 1, 6, 8, 7, 5]));
