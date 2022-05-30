function solution(price, money, count) {
  const totalPrice = (((count + 1) * count) / 2) * price;
  return money - totalPrice <= 0 ? totalPrice - money : 0;
}
