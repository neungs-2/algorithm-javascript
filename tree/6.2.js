// Binary tree
function createNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function createBinaryTree() {
  this.root = null;
}

// 데이터 삽입
createBinaryTree.prototype.insert = function (data, treeNode = this.root) {
  const node = new createNode(data);

  if (!this.root) {
    this.root = node;
    return this;
  }

  if (node.data <= treeNode.data) {
    // treeNode.left = !treeNode.left ? node : this.insert(data, treeNode.left); --> property 저장 X
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

  return treeNode; // 처음에 여기에 this를 넣으니 tree 내부에 tree가 들어가는 형태...
};

createBinaryTree.prototype.search = function (data) {
  let currentNode = this.root;

  while (currentNode) {
    if (currentNode.data === data) {
      return true;
    } else {
      currentNode =
        currentNode.data > data ? currentNode.left : currentNode.right;
    }
  }

  return false;
};

const btree = new createBinaryTree();

btree.insert(13);
btree.insert(14);
btree.insert(15);
btree.insert(10);
btree.insert(8);

console.log(btree);
console.log(btree.search(10));
