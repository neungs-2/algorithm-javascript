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
};

// 데이터 탐색
createBinaryTree.prototype.search = (data) => {
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

// 데이터 삭제
createBinaryTree.prototype.delete = function (data) {
  let currentNode = this.root;
  let parentNode;

  while (currentNode) {
    if (currentNode.data !== data) {
      parentNode = currentNode;
      currentNode =
        data < currentNode.data ? currentNode.left : currentNode.right;
    } else break;
  }

  if (currentNode === null) return false;

  if (!currentNode.left && !currentNode.right) {
    if (currentNode === parentNode.left) parentNode.left = null;
    else parentNode.right = null;
  } else if (currentNode.left && currentNode.right) {
    rightMin = this.min(currentNode.right).data;
    this.delete(rightMin);
    currentNode.data = rightMin;
  } else {
    if (currentNode === parentNode.left) {
      parentNode.left = currentNode.left ?? currentNode.right;
    } else {
      parentNode.right = currentNode.left ?? currentNode.right;
    }
  }
};

createBinaryTree.prototype.findMin = (node) => {
  while (node) {
    node = node.left;
  }

  return node;
};

const btree = new createBinaryTree();

btree.insert(13);
btree.insert(14);
btree.insert(15);
btree.insert(10);
btree.insert(8);

console.log(btree);
console.log(btree.search(10));

btree.delete(14);
console.log(btree);
