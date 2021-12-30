const INPUT = 'Abbc, d, c, bb, a';

let cleanData;
let halfScope;

// Data Cleansing
const doDataCleansing = (str) => {
  let dataArray = str.replace(/[^A-Za-z0-9]/g, '');
  dataArray = dataArray.toLowerCase();
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
