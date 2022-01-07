const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  appendHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  appendLast(data) {
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
}
