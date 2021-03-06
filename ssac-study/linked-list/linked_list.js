class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
    this.size = 0;

  // Insert first node - 첫번째 삽입
  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  // Insert last node - 마지막 삽입
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) { 
        current = current.next; 
      }

      current.next = node; 
    }
    this.size++; 
  }

  // Insert at index - 중간 삽입
  insertAt(data, index) {
    // If index is out of range ~ 인덱스가 size 범위 넘어서면 아무것도 리턴 하지 않는다.
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.head = new Node(data, this.head) //즉, index 0에 삽입시 해당 노드를 넣고 다 한칸식 뒤로 미룸
      this.size++
      return;

    }

    const node = new Node(data);
    let current, previous;

    // Set current first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      //해당 data의 값을 가져오기 위해 index와 값이 같아질때까지 loop한다.
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head; //current는 현재 첫번째 노드임
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      //loop를 통해 해당 index의 연결고리를 끊는다.
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list ~ 메모리자체에는 데이터가 남아있음
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print list data ~ data값만 따로
  printListData() {
    let current = this.head; // 현재 노드

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}