const input = 'abcd';
const inputArray = input.split('');

const getPermutation = (array) => {
  const result = [];
  if (array.length === 1) return [array];

  for (const pickedLetter of array) {
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
