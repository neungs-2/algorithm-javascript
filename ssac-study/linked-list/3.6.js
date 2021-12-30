function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

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
  let temp = this.head;

  while (temp) {
    console.log(temp);
    temp = temp.next;
  }
};

LinkedList.prototype.reverseList = function () {
  let cursor = this.head;
  let nextNode;
  let previousNode = null;

  while (cursor) {
    nextNode = cursor.next;
    cursor.next = previousNode;
    previousNode = cursor;
    cursor = nextNode;
  }

  this.head = previousNode;
};

const switchToSumArray = (list1, list2) => {
  let node1 = list1.head;
  let node2 = list2.head;
  let array1 = [];
  let array2 = [];

  for (let i = 0; i < list1.length; i++) {
    array1.push(node1.data);
    node1 = node1.next;
  }

  for (let i = 0; i < list2.length; i++) {
    array2.push(node2.data);
    node2 = node2.next;
  }

  const num1 = array1.join('');
  const num2 = array2.join('');
  const resultNum = Number(num1) + Number(num2) + '';
  const resultArray = resultNum.split('');

  return resultArray;
};

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();
const resultLinkedList = new LinkedList();

linkedList1.pushBack(1);
linkedList1.pushBack(2);
linkedList1.pushBack(3);
linkedList1.pushBack(0);

linkedList2.pushBack(4);
linkedList2.pushBack(5);
linkedList2.pushBack(6);

sumList = switchToSumArray(linkedList1, linkedList2);

for (let num of sumList) resultLinkedList.pushBack(num);

resultLinkedList.traverse();
