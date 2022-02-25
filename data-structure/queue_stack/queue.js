// Queue를 Array, shift()를 사용해 구현할 경우
// shift 시 나머지 원소를 재배치해야 함 --> 실행시간 오차 발생
// Queue를 직접 구현

// Object storage로 구현
class Queue {
  constructor(first = null) {
    this.front = 0;
    this.rear = 0;
    this.storage = {};
  }

  getSize() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  add(value) {
    if (this.size === 0) {
      this.storage[0] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  popLeft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[first];
      delete this.storage[first];
      this.first += 1;
    }
    return temp;
  }
}

// Linked List로 구현
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
