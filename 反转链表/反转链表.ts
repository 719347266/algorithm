import ListNode from "../ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let pre = null;
  let current = head;

  while (current) {
    const next = current.next;

    current.next = pre;

    pre = current;

    current = next!;
  }

  return pre;
}

const head: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(reverseList(head));
