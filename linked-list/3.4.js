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
  let previousNode;

  if (cursor) {
    nextNode = cursor.next;
    cursor.next = null;
    previousNode = cursor;
    cursor = nextNode;
  }

  while (cursor) {
    nextNode = cursor.next;
    cursor.next = previousNode;
    previousNode = cursor;
    cursor = nextNode;
  }

  this.head = previousNode;
};

const linkedList = new LinkedList();

linkedList.pushBack(11);
linkedList.pushBack(12);
linkedList.pushBack(13);
linkedList.pushBack(14);

linkedList.reverseList();
linkedList.traverse();
