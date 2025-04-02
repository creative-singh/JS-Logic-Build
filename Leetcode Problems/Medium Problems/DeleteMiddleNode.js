// Question Link: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

var deleteMiddle = function(head) {
    if(head.next === null) return null
    let prev = head
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = slow.next
    return head
};