// 어떤 숫자를 자리수 별로 1의 자리가 헤더에 오게 Linked List에 담았다.
// 이런 식의 Linked List 두개를 받아서 합산하고 같은 식으로 Linked List에 담아서 반환하라.
const Node = require('./node');
const LinkedList = require('./one-way_linked_list');

class DigitSummation extends Node {
  static sumDigits(node1, node2, carry = 0) {
    if (!node1 && !node2 && carry === 0) return null;

    const resultNode = new Node();
    let value = carry;

    if (node1) value += node1?.data;
    if (node2) value += node2?.data;
    resultNode.data = value % 10;

    if (node1?.next || node1?.next || value >= 10) {
      const next = this.sumDigits(
        node1?.next,
        node2?.next,
        value >= 10 ? 1 : 0
      );
      resultNode.next = next;
    }

    return resultNode;
  }
}

// const l1 = new LinkedList();
// l1.append(1);
// l1.append(2);
// l1.append(3);

// const l2 = new LinkedList();
// l2.append(4);
// l2.append(5);
// l2.append(9);

// const n = DigitSummation.sumDigits(l1.get(0), l2.get(0));
// console.log(n);

// let nd = n;
// while (nd.next) {
//   console.log(nd.data);
//   nd = nd.next;
// }
// console.log(nd.data);
