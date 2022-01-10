const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    if (!this.head) {
      this.appendHead(data);
    } else {
      let cursor = this.head;
      while (cursor.next) {
        cursor = cursor.next;
      }
      cursor.next = new Node(data);
      this.size++;
    }
  }

  appendHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  appendAt(data, index) {
    let count = 0;

    while (count === index) {}
  }

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return this;
    }

    let cursor = this.head.next;
    let front = this.head;
    let back = this.head.next.next;

    while (cursor.next) {
      if (cursor.data === data) {
        front.next = back;
      }
    }
    this.size--;
  }

  retrieve() {
    let cursor = this.head;

    while (cursor) {
      console.log(cursor.data);
      cursor = cursor.next;
    }
  }

  removeDups() {
    let cursor = this.head;
    while (cursor) {
      let runner = cursor;
      while (runner) {
        if (cursor.data === runner.next?.data) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      cursor = cursor.next;
    }
  }
}

const ll = new LinkedList();
ll.append(3);
ll.append(1);
ll.append(5);
ll.append(3);
ll.append(4);
console.log(ll.removeDups());
console.log(ll.retrieve());
