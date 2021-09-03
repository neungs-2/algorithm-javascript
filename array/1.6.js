const n = 4,
  m = 5;
const nums1 = [1, 3, 6, 7],
  nums2 = [2, 4, 5, 7, 8];

const mergeArrayEasy = (array1, array2) => {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  array1.sort();
  return array1;
};

console.log(mergeArrayEasy(nums1, nums2));

// TODO: 내장함수 없이 기능 구현하기; 미완성

// const mergeArray = (array1, array2, int1, int2) => {
//   let i = 0, j = 0;
//   let holding;

//   for (let k = 0; k < int2; k++){
//     array1.push(0);
//   }

//   if (array1[0] > array2[0]){
//     for (let k = int1 - 1; k >0 0; k--){
//       array1[k] = array1[k-1];
//     }
//     array1[0] = array2[0]
//   } else if (array1[-1] > array2[-1])

//   while(int2 > 0){
//     if (array1[i] >== array2[j])
//   }

//   return array1;
// }
