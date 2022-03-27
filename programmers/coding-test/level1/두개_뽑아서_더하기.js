const solution = (numbers) => {
  const sumOfCombinationArr = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    const restArr = numbers.slice(i + 1);

    for (let j = 0; j < restArr.length; j++) {
      sumOfCombinationArr.push(numbers[i] + restArr[j]);
    }
  }

  return Array.from(new Set(sumOfCombinationArr)).sort((a, b) => a - b);
};
