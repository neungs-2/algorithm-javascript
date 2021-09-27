// Binary tree
function createNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function createBinaryTree() {
  this.root = null;
}

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

  return this;
};

// createBinaryTree.prototype.inorder = function (node, result) {
//   if (!node) return;

//   this.inorder(node.left, result);
//   result.push(node.data);
//   this.inorder(node.right, result);
// };

// createBinaryTree.prototype.traverse = function () {
//   const result = [];
//   let currentNode = this.root;

//   this.inorder(currentNode, result);

//   return result;
// };

const btree = new createBinaryTree();

btree.insert(13);
btree.insert(14);
btree.insert(15);
btree.insert(10);
btree.insert(8);
