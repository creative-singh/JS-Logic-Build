// Question Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list
// 83. Remove Duplicates from Sorted List

var deleteDuplicates = function(head) {
    let res = head;
    
    while(head && head.next) {
        if(head.val == head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next
        }
    }
    return res
};
