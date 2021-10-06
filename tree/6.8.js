const createNode = require('./6.2.js').createNode;
const createBinaryTree = require('./6.2.js').createBinaryTree;

console.log(
  'Start 6.8 #######################################################'
);

function invertTree(node) {
  if (!node) return;

  const left = invertTree(node.left);
  const right = invertTree(node.right);

  node.right = left;
  node.left = right;

  return node;
}

const btree = new createBinaryTree();
const dataArray = [10, 14, 16, 12, 17, 15, 6, 4, 3, 9, 1];

dataArray.map((data) => btree.insert(data));
console.log(btree);

const invertedTree = invertTree(btree.root);
console.log(invertedTree);
