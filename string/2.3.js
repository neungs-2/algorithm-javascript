const INPUT = 'Abbc, d, c, bb, a';

let cleanData;
let halfScope;

// Data Cleansing
const doDataCleansing = (str) => {
  let dataArray = str.toLowerCase();
  dataArray = dataArray.replace(/[^a-z0-9]/g, '');

  return dataArray;
};

const isSameValue = (str, scope) => {
  for (let i = 0; i < scope; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};

cleanData = doDataCleansing(INPUT);
halfScope = Math.floor(cleanData.length / 2);
console.log(isSameValue(cleanData, halfScope));
