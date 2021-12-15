function solution(lottos, win_nums) {
  const answer = [];

  // num of correct : ranking
  const winningLotto = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  const numOfZero = lottos.filter((num) => num === 0).length;
  const lowest = lottos.filter((num) => win_nums.includes(num)).length;
  const highest = correctNum + numOfZero;

  answer.push(winningLotto[highest], winningLotto[lowest]);

  return answer;
}
