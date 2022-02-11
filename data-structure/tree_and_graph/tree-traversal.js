// 트리 순회하기
// Inorder: left - root - right
// Preorder: root - left - right
// Postorder: left - right - root

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data, treeNode = this.root) {
    const node = new Node(data);

    if (!this.root) {
      this.setRoot(node);
      return this;
    }

    if (node.data <= treeNode.data) {
      if (!treeNode.left) treeNode.left = node;
      else this.insert(data, treeNode.left);
    } else {
      if (!treeNode.right) treeNode.right = node;
      else this.insert(data, treeNode.right);
    }

    return treeNode;
  }

  setRoot(node) {
    this.root = node;
  }

  get getRoot() {
    return this.root;
  }

  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node = this.root) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node = this.root) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
}

const btree = new Tree();
const dataArray = [10, 14, 16, 12, 17, 15, 6, 4, 3, 9, 1];

dataArray.map((data) => btree.insert(data));
btree.inorder();
btree.preorder();
btree.postorder();
console.log(btree);
