const createNode = require('./6.2.js').createNode;
const createBinaryTree = require('./6.2.js').createBinaryTree;
const btree = require('./6.2.js').btree;

createBinaryTree.prototype.dfsRecur = function (node, result) {
  if (!node) return [];

  result.push(node.data);

  if (node.left) {
    this.dfsRecur(node.left, result);
  }
  if (node.right) {
    this.dfsRecur(node.right, result);
  }

  return result;
};

createBinaryTree.prototype.dfsIter = function () {
  if (!this.root) return [];

  const stack = [this.root];
  const result = [];

  while (stack.length !== 0) {
    const node = stack.pop();
    result.push(node.data);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};

const answer = [];

console.log('##############################################');

console.log(btree.dfsRecur(btree.root, []));
console.log(btree.dfsIter());
