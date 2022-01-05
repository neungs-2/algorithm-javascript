class Heap () {
  constructor () {
    this.heap = [];
  }

  getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;
  getRightChildIdx = (parentIdx) => parentIdx * 2 + 2
  getParentIdx = (childIdx) => {}
}