// Question Link: https://leetcode.com/problems/add-two-numbers-ii
// 445. Add Two Numbers II

var addTwoNumbers = function(l1, l2) {
    const l1Arr = lltoArr(l1)
    const l2Arr = lltoArr(l2)
    
    let newArr = [], carry = 0;
    if(l1Arr.length > l2Arr.length) {
        for(let i = 1; i <= l1Arr.length; i++) {
            let sum = l1Arr.at(-i) + (l2Arr.at(-i) || 0) + carry
            if(sum > 9) {
                carry = Math.floor(sum / 10)
            }else {
                carry = 0
            }
            newArr.unshift(sum%10) 
        }
    } else {
        for(let i = 1; i <= l2Arr.length; i++) {
            let sum = (l1Arr.at(-i) || 0) + l2Arr.at(-i) + carry
            if(sum > 9) {
                carry = Math.floor(sum / 10)
            }else {
                carry = 0
            }
            newArr.unshift(sum%10) 
        }
    }
    if(carry) {
        newArr.unshift(carry)
    }

    const newList = new ListNode(-1)
    let ptr = newList
    for(let elem of newArr) {
        const node = new ListNode(elem)
        ptr.next = node
        ptr = ptr.next
    }
    return newList.next
};

function lltoArr(ll) {
    let arr = []
    let ptr = ll;
    while(ptr) {
        arr.push(ptr.val)
        ptr = ptr.next
    }
    return arr;
}
