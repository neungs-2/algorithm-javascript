// create Linked List
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.switchAcyclicToCircular = function () {
  let currentNode = this.head;

  for (let i = 0; i < this.length - 1; i++) {
    currentNode = currentNode.next;
  }
  currentNode.next = this.head;
};

LinkedList.prototype.pushBack = function (data) {
  const newNode = new Node(data);
  let cursor;

  if (!this.head) {
    this.head = newNode;
    this.length++;
    return;
  }

  cursor = this.head;
  while (cursor.next) {
    cursor = cursor.next;
  }

  cursor.next = newNode;
  this.length++;
};

LinkedList.prototype.traverse = function () {
  let currentNode = this.head;

  while (currentNode) {
    console.log(currentNode);

    if (currentNode.next === this.head) break;
    else currentNode = currentNode.next;
  }
};

// 3.5 start
LinkedList.prototype.isCycle = function () {
  let currentNode = this.head;
  let circulation;

  while (currentNode) {
    if (currentNode.next !== this.head) {
      currentNode = currentNode.next;
    } else return true;
  }
  return false;
};

const acyclicLinkedList = new LinkedList();

acyclicLinkedList.pushBack(11);
acyclicLinkedList.pushBack(12);
acyclicLinkedList.pushBack(13);
acyclicLinkedList.pushBack(14);
acyclicLinkedList.traverse();
console.log(acyclicLinkedList.isCycle());

const circularLinkedList = new LinkedList();

circularLinkedList.pushBack(11);
circularLinkedList.pushBack(12);
circularLinkedList.pushBack(13);
circularLinkedList.pushBack(14);
circularLinkedList.switchAcyclicToCircular();
circularLinkedList.traverse();
console.log(circularLinkedList.isCycle());
