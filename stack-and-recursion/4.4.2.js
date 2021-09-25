function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

//###############################################################

const input = 'abc';
const inputArray = input.split('');

const getPermutation = (array) => {
  const result = [];
  if (array.length === 1) return [array];

  for (let pickedLetter of array) {
    let temp = [...array];
    temp.splice(temp.indexOf(pickedLetter), 1);

    const nonPickedArr = temp;
    const permutation = getPermutation(nonPickedArr);

    const sumPickedLetter = permutation.map((e) => {
      e.push(pickedLetter);
    });

    result.push(sumPickedLetter);
  }
  return result;
};
const answer = getPermutation(inputArray);
console.log(answer);
