const STRS = ['eat', 'repaid', 'paired', 'tea', 'bat'];
const idxToWord = [];

let gIndexArray;

// 인풋 배열 단어 정렬
const sortAlphabet = (strArray) => {
  const resultArray = [];
  let sortedWord;

  for (word of strArray) {
    sortedWord = word.split('').sort().join('');
    resultArray.push(sortedWord);
  }

  return resultArray;
};

// 배열 내 특정 단어 모든 인덱스 반환
const findsIndexes = (targetWord, array) => {
  const idxArray = new Array();
  let index = array.indexOf(targetWord);

  while (index != -1) {
    idxArray.push(index);
    index = array.indexOf(targetWord, index + 1);
  }

  return idxArray;
};

const isAnagram = (sortedArray) => {
  const resultArray = [];
  const sortedSet = new Set(sortedArray);
  let idxArray;

  sortedSet.forEach((element) => {
    idxArray = findsIndexes(element, sortedArray);

    if (resultArray.includes(idxArray) === false) {
      resultArray.push(idxArray);
    }
  });

  return resultArray;
};

gIndexArray = isAnagram(sortAlphabet(STRS));

for (arr of gIndexArray) {
  let wordArray = [];
  for (idx of arr) {
    wordArray.push(STRS[idx]);
  }
  idxToWord.push(wordArray);
}

console.log(idxToWord);
