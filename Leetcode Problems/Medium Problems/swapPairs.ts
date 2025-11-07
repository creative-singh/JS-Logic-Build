// Question Link: https://leetcode.com/problems/swap-nodes-in-pairs
// 24. Swap Nodes in Pairs

var swapPairs = function(head) {
    if(!head) return head;
    
    let dummy = new ListNode(0, head)
    let ptr = head
    let prev = dummy

    while(ptr && ptr.next) {
        let temp = ptr.next

        ptr.next = temp.next
        temp.next = ptr
        prev.next = temp

        prev = ptr
        ptr = ptr.next
    }

    return dummy.next
};


// Recursion
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    const first = head
    const second = head.next

    first.next = swapPairs(second.next);

    second.next = first;

    return second;
};
