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

  append(data) {
    if (!this.head) {
      this.appendHead(data);
    } else {
    }
  }

  delete() {}

  retrieve() {}
}
