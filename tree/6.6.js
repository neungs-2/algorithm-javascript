class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data, treeNode = this.root) {
    const node = new Node(data);

    if (!this.root) {
      this.root = node;
      return;
    }

    if (data <= treeNode.data) {
      if (!treeNode.left) {
        treeNode.left = node;
      } else {
        treeNode.left = this.insert(data, treeNode.left);
      }
    } else {
      if (!treeNode.right) {
        treeNode.right = node;
      } else {
        treeNode.right = this.insert(data, treeNode.right);
      }
    }

    return treeNode;
  }

  cntPath(node, sum, count = 0) {
    const cnt = count;

    if (!node) return cnt;

    sum -= node.data;

    if (sum === 0) return ++cnt;

    if (node.left) {
      this.cntPath(node.left, sum, count);
    } else if (node.right) {
      this.cntPath(node.right, sum, count);
    }
  }
}

const bt = new BinaryTree();
const dataArr = [5, 2, 8, -1, 4, -3, 6, 10, 12];

for (let data of dataArr) {
  bt.insert(data);
}

console.log(bt);

/*

          5
      2      8
    -1  4  6  10
  -3            12

*/

const result = bt.cntPath(bt.root, 11);
console.log('Path Count:', result);
