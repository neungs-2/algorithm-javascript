// 단방향 링크드 리스트
// head를 모르고 내가 지워야할 노드만 알고 있음.
// 주어진 노드를 임의의 링크드 리스트에서 제거하는 함수
// 첫번째, 마지막 노드에는 적용 X
const LinkedList = require('./one-way_linked_list');

class Solution extends LinkedList {
  deleteWithoutHead(node) {
    if (!node || !node.next) {
      return false;
    }

    node.data = node.next.data;
    node.next = node.next.next;
  }
}

const ll = new Solution();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.retrieve();

console.log('deleteWithoutHead start');
ll.deleteWithoutHead(ll.get(2));
ll.retrieve();
