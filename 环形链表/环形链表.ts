import ListNode from "../ListNode";

function hasCycle(head: ListNode | null): boolean {
  if (!head || head.next === null) return false;

  // 定义快慢指针
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    // 慢指针每次走一步
    slow = slow.next!;
    // 快指针每次走两步
    fast = fast.next.next!;
    // 如果是环形链表，那么快慢指针一定会相遇
    if (slow === fast) return true;
  }

  return false;
}

//           s
// [0, 1, 2, 3, 4, 5]
