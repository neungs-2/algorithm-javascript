// 에라토스테네스의 체
// 소수를 구할 때 효율적인 알고리즘
// 모든 자연수는 소수!
// 주어진 범위에서 자기 자신을 제외한 배수 값을 지웠을 때 남는 것이 소수

function eratosthenes(range) {
  // 숫자와 배열의 Index를 맞추기 위해 0 ~ range 까지의 배열 생성
  // 0과 1은 소수가 아니므로 false 처리

  // 개수만 구하고 싶다면 값을 true로
  const arr = Array(range + 1)
    .fill(true)
    .fill(false, 0, 2);

  // 소수 자체를 구하고 싶다면 index = value로
  // const arr = [];
  // for (let i = 0; i <= range; i++) {
  //   arr.push(i);
  // }

  // 탐색 범위를 줄이기 위해 range의 제곱근까지만 i 반복
  // 배수를 제외시키기 위한 j는 i의 제곱부터 탐색
  // i의 제곱보다 작은 배수는 이미 해당 숫자보다 작은 소수의 배수를 제거할 때 처리됨
  for (let i = 2; i * i <= range; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= range; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((v) => v).length;
}
