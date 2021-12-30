const PRICE = 11;
const COIN = [1, 2, 5];
const SORTEDCOIN = COIN.sort((a, b) => b - a);

function getChange(price, coins, answerList = []) {
  let remaining;
  if (price === 0) {
    return answerList;
  }

  for (let coin of coins) {
    if (price >= coin) {
      answerList.push(coin);
      remaining = price - coin;
      break;
    }
  }

  const result = getChange(remaining, coins, answerList);

  return result;
}

const change = getChange(PRICE, SORTEDCOIN);
console.log(change);
