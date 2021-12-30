const createNode = require('./6.2.js').createNode;
const createBinaryTree = require('./6.2.js').createBinaryTree;
const btree = require('./6.2.js').btree;

createBinaryTree.prototype.bfs = function () {
  if (!this.root) return [];

  const queue = [this.root];
  const result = [];

  while (queue.length !== 0) {
    const node = queue.shift();
    result.push(node.data);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
};

console.log('##############################################');
console.log(btree.bfs());
