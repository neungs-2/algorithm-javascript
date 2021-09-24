const input = 'abcd';
const inputArray = input.split('');

const getPermutation = (inputArray) => {
  let result = [];
  if (inputArray.length === 1) return [inputArray];

  for (let pickedLetter of inputArray) {
    const temp = [...inputArray];
    temp.splice(temp.indexOf(pickedLetter), 1);
    const nonPickedArr = temp;
    const permutation = getPermutation(nonPickedArr);
    const sumPickedLetter = permutation.map((e) => e.unshift(pickedLetter));
    result.push(sumPickedLetter);
  }
  return result;
};
const answer = getPermutation(inputArray);
console.log(answer);
