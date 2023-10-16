import ListNode from "../ListNode";

function deleteNode(node: ListNode | null): void {
  if (!node) return;
  node.val = node.next!.val;
  node.next = node.next!.next;
}
