const Heap = require('./heap');

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

const pq = new PriorityQueue();
pq.enqueue(5, 500);
pq.enqueue(3, 300);
pq.enqueue(1, 100);
pq.enqueue(2, 200);
pq.enqueue(4, 400);
console.log(pq.heap);
console.log(pq.dequeue());
console.log(pq.heap);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
