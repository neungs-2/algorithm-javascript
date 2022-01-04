function solution(priorities, location) {
  const answerArr = [];
  const keyArr = Array.from({ length: priorities.length }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const locationKey = keyArr[location];

  while (priorities.length !== 0) {
    const biggerThanFront = priorities
      .slice(1)
      .filter((e) => e > priorities[0]);
    if (biggerThanFront.length !== 0) {
      priorities.push(priorities[0]);
      priorities.shift();
      keyArr.push(keyArr[0]);
      keyArr.shift();
    } else {
      priorities.shift();
      answerArr.push(keyArr[0]);
      keyArr.shift();
    }
  }

  return answerArr.indexOf(locationKey) + 1;
}

// 다른 풀이
function solution(priorities, location) {
  const list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  let count = 0;
  while (true) {
    var cur = list.shift(0);
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
