// Question Link: https://leetcode.com/problems/lru-cache/

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.maxCap = capacity;
        this.cache = new Map();

        this.leftNode = new Node(0, 0);
        this.rightNode = new Node(0, 0);

        this.leftNode.next = this.rightNode;
        this.rightNode.prev = this.leftNode;
    }
   
    remove(node) {
        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    insert(node) {
        const prev = this.rightNode.prev;
        prev.next = node;
        node.prev = prev;

        node.next = this.rightNode;
        this.rightNode.prev = node;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);

        this.remove(node);
        this.insert(node);

        return node.val;
    }

    put(key, value) {
        if (this.cache.has(key)) this.remove(this.cache.get(key));

        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.maxCap) {
            const lruNode = this.leftNode.next;
            this.remove(lruNode);
            this.cache.delete(lruNode.key);
        }

    }
}