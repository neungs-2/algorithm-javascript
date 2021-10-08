class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  isValidBST(node, min = null, max = null) {
    if (!node) {
      return true;
    }

    if (max !== null && node.data >= max) {
      return false;
    }

    if (min !== null && node.data <= min) {
      return false;
    }

    const left = this.isValidBST(node.left, min, node.data);
    const right = this.isValidBST(node.right, node.data, max);

    return left && right;
  }
}

const bst = new Tree();
const root = new Node(8);
bst.root = root;

root.left = new Node(6);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right = new Node(15);
root.right.left = new Node(12);
root.right.right = new Node(21);

const wrongBST = new Tree();
const wrongBSTRoot = new Node(8);
wrongBST.root = wrongBSTRoot;

wrongBSTRoot.left = new Node(6);
wrongBSTRoot.left.left = new Node(3);
wrongBSTRoot.left.right = new Node(10);
wrongBSTRoot.right = new Node(15);
wrongBSTRoot.right.left = new Node(12);
wrongBSTRoot.right.right = new Node(21);

console.log(bst.isValidBST(root));
console.log(wrongBST.isValidBST(wrongBSTRoot));
