function solution(fees, records) {
  var answer = [];
  const recordsMatrix = [];
  const gettingInTime = {};
  const gettingOutTime = {};

  const putsTimeToObj = (object, record) => {
    if (object.hasOwnProperty(record[1]) === false) {
      object[record[1]] = [record[0]];
    } else object[record[1]].push(record[0]);
  };

  const calculatesAccumTime = (inTimeArray, outTimeArray) => {
    let accumTime = 0;
    let inTime;
    let outTime;

    for (let i = 0; i < inTimeArray.length; i++) {
      inTime = inTimeArray[i].split(':');
      outTime = outTimeArray[i].split(':');

      accumTime += (outTime[0] - inTime[0]) * 60 + (outTime[1] - inTime[1]);
    }

    return accumTime;
  };

  const calculatesFee = (feeArray, accumTime) => {
    if (accumTime <= feeArray[0]) {
      return feeArray[1];
    } else {
      return (
        feeArray[1] +
        Math.ceil((accumTime - feeArray[0]) / feeArray[2]) * feeArray[3]
      );
    }
  };

  records.map((record) => {
    recordsMatrix.push(record.split(' '));
  });

  for (let record of records) {
    if (record[2] === 'IN') {
      putsTimeToObj(gettingInTime, record);
    } else if (record[2] === 'OUT') {
      putsTimeToObj(gettingOutTime, record);
    }
  }

  for (carNum of Object.keys(gettingInTime)) {
    if (gettingInTime[carNum].length !== gettingOutTime[carNum].length) {
      gettingOutTime[carNum].push('23:59');
    }
  }

  for (carNum of Object.keys(gettingInTime).sort()) {
    let accumTime = calculatesAccumTime(
      gettingInTime[carNum],
      gettingOutTime[carNum]
    );
    answer.push(calculatesFee(records, accumTime));
  }

  return answer;
}

const fees = [180, 5000, 10, 600];
const records = [
  '05:34 5961 IN',
  '06:00 0000 IN',
  '06:34 0000 OUT',
  '07:59 5961 OUT',
  '07:59 0148 IN',
  '18:59 0000 IN',
  '19:09 0148 OUT',
  '22:59 5961 IN',
  '23:00 5961 OUT',
];
const result = solution(fees, records);

console.log(result);
