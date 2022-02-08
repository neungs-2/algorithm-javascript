const solution = (people, limit) => {
  let answer = 0;
  let leftIdx = 0;
  let rightIdx = people.length - 1;

  people.sort((a, b) => b - a);

  while (leftIdx < rightIdx) {
    if (people[leftIdx] + people[rightIdx] <= limit) {
      ++answer;
      ++leftIdx;
      --rightIdx;
    } else {
      ++answer;
      ++leftIdx;
    }
  }
  if (leftIdx === rightIdx) return ++answer;
  return answer;
};

console.log(solution([70, 50, 80, 50], 100));
