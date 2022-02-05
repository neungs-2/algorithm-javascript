function solution(arr1, arr2) {
  return arr1.map((val1, idx1) =>
    arr2[idx1].map((val2, idx2) => val1[idx2] + val2)
  );
}
