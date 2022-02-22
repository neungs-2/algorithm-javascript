function solution(bridge_length, weight, truck_weights) {
  const bridge = [];
  let stopwatch = 0;

  while (truck_weights.length > 0 || bridge.length > 0) {
    stopwatch++;

    for (let truck of bridge) {
      const remainDistance = bridge_length - (stopwatch - truck.startTime);

      if (remainDistance === 0) {
        bridge.shift();
      }
    }

    const totalWeight =
      bridge.reduce((acc, cur) => acc + cur.weight, 0) +
      (truck_weights[0] || 0);

    if (totalWeight <= weight && bridge.length < bridge_length) {
      if (!truck_weights[0]) {
        continue;
      }
      const truckWeight = truck_weights.shift();
      const truck = {
        weight: truckWeight,
        startTime: stopwatch,
      };
      bridge.push(truck);
    }
  }

  return stopwatch;
}

// 다른 풀이
function solution(bridge_length, weight, truck_weights) {
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0; //[트럭무게, 나갈 시간]

  while (qu.length > 0 || truck_weights.length > 0) {
    if (qu[0][1] === time) {
      weightOnBridge -= qu.shift()[0];
    }

    if (weightOnBridge + truck_weights[0] <= weight) {
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      if (qu[0]) {
        time = qu[0][1] - 1; //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      }
    }

    time++;
  }
  return time;
}
