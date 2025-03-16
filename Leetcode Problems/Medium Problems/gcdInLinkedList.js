// Question Link: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/

var insertGreatestCommonDivisors = function(head) {
    let ptr = head
    while(ptr.next) {
        let gcd = returnGcd(ptr.val, ptr.next.val)
        let node = new ListNode(gcd, null)
        let temp = ptr.next
        ptr.next = node
        node.next = temp

        ptr = ptr.next.next
    }
    return head
};

function returnGcd(n1, n2) {
    while(n2 !== 0) {
        let temp = n2
        n2 = n1 % n2
        n1 = temp
    }
    return n1
}