class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;
  getRightChildIdx = (parentIdx) => parentIdx * 2 + 2;
  getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);

  peek = () => this.heap[0];

  insert = (key, value) => {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp();
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count === 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIdx = this.getParentIdx(index);

      if (this.heap[parentIdx].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIdx];
        index = parentIdx;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIdx(index) < count) {
      const leftChildIdx = this.getLeftChildIdx(index);
      const rightChildIdx = this.getRightChildIdx(index);

      const smallerChildIdx =
        rightChildIdx < count &&
        this.heap[rightChildIdx].key < this.heap[leftChildIdx].key
          ? rightChildIdx
          : leftChildIdx;

      if (this.heap[smallerChildIdx].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIdx];
        index = smallerChildIdx;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

module.exports = MinHeap;
