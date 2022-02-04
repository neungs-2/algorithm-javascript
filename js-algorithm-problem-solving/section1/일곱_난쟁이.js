const solution = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sumHeights = sum - arr[i] - arr[j];
      if (sumHeights === 100)
        return [
          ...arr.slice(0, i),
          ...arr.slice(i + 1, j),
          ...arr.slice(j + 1),
        ];
    }
  }

  return 'Can not find answer.';
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
