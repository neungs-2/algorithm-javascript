const STRS = ['eat', 'repaid', 'paired', 'tea', 'bat'];

const sortAlphabet = (strArray) => {
  const resultArray = [];
  let sortedWord;

  for (word of strArray) {
    sortedWord = word.split('').sort().join('');
    resultArray.push(sortedWord);
  }

  return resultArray;
};

console.log(sortAlphabet(STRS));

let sortedArray = sortAlphabet(STRS);

let idx;

for (word of sortAlphabet)