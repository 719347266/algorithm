import ListNode from "./ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let newListNode: ListNode | null = new ListNode(0);
  let current = newListNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    // 一直记录当前最新的节点
    current = current.next;
  }

  return newListNode.next;
}

const list1: ListNode = {
  val: 1,
  next: { val: 2, next: { val: 3, next: null } },
};
const list2: ListNode = {
  val: 1,
  next: { val: 2, next: { val: 4, next: null } },
};

console.log(mergeTwoLists(list1, list2), "结果");
