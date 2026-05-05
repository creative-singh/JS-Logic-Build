// Question Link: https://leetcode.com/problems/rotate-list
// 61. Rotate List

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head || head.next === null) return head;
    
    let length = 1;
    let ptr = head;
    while (ptr.next) {
        ptr = ptr.next;
        length++;
    }
    // reducing k to overcome TLE
    k = k % length;
    if (k === 0) return head;

    while(k) {
        ptr = head
        while(ptr.next.next) {
            ptr = ptr.next
        }
        let node = ptr.next
        ptr.next = null
        node.next = head
        head = node
        k--
    }
    return head
};
