// Question Link: https://leetcode.com/problems/design-linked-list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.size = 0
};

MyLinkedList.prototype.get = function(index) {
    if(this.size <= index || this.size == 0) return -1

    let ptr = this.head
    for(let i = 0; i < index; i++) {
        ptr = ptr.next
    }
    return ptr.value
};

MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val)
    if(this.size) {
        node.next = this.head
    } else {
        this.tail = node
    }
    this.head = node
    this.size++
};

MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val)
    if(this.size) {
        this.tail.next = node
    } else{
        this.head = node
    }
    this.tail = node
    this.size++
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.size < index || index < 0) return 

    if(index == 0) {
        this.addAtHead(val)
    }else if(index == this.size) {
        this.addAtTail(val)
    } else {
        let node = new Node(val);
        let ptr = this.head
        for(let i = 1; i < index; i++) {
            ptr = ptr.next
        }
        let temp = ptr.next
        ptr.next = node
        node.next = temp

        this.size++
    }
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index >= this.size || index < 0) return

    if(index == 0) {
        this.head = this.head.next
    } else if(this.size === 1) {
        this.tail = null
    } else {
        let ptr = this.head
        for(let i = 1; i < index; i++) {
            ptr = ptr.next
        }
        if(ptr.next === this.tail) {
            this.tail = ptr
        }
        ptr.next = ptr.next.next
    }
    this.size--
};