// Question Link: https://leetcode.com/problems/add-two-numbers
// 2. Add Two Numbers

var addTwoNumbers = function(l1, l2) {
    let ptr1 = l1
    let ptr2 = l2
    let carry = 0
    let dummyNode = new ListNode(-1)
    let curr = dummyNode
    while(ptr1 || ptr2) {
        let sum = (ptr1?.val || 0) + (ptr2?.val || 0)
        if(carry) {
            sum += carry
            carry = 0
        }
        if(sum > 9) {
            carry = Math.floor(sum / 10)
        }
        let node = new ListNode(sum % 10, null)
        curr.next = node
        curr = curr.next
        ptr1 = ptr1?.next
        ptr2 = ptr2?.next
    }
    if(carry) {
        let node = new ListNode(carry, null)
        curr.next = node
        curr = curr.next
    }
    head = dummyNode.next
    return head
};
