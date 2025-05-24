// Question Link: https://leetcode.com/problems/merge-in-between-linked-lists/description/

var mergeInBetween = function(list1, a, b, list2) {
    let left = null;
    let right = list1
    for(let i = 0; i <= b; i++) {
        if(i === a-1) {
            left = right
        }
        right = right.next
    }
    left.next = list2
    let ptr = list2
    while(ptr.next != null) {
        ptr = ptr.next
    }
    ptr.next = right
    return list1
};