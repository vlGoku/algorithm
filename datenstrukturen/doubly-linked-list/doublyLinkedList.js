"use strict";
class ListNode {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.value = val;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Add Item at the end of the list
    append(value) {
        const newNode = new ListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            let prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.prev = prev;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.head === null)
            return undefined;
        let currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.tail = currentTail === null || currentTail === void 0 ? void 0 : currentTail.prev;
        this.tail.next = null;
        this.length--;
        return currentTail;
    }
    shift() {
        var _a;
        if (this.length === 0)
            return undefined;
        let currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        this.head.prev = null;
        currentHead.next = null;
        this.length--;
        return currentHead;
    }
    unshift(value) {
        let newNode = new ListNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index) { }
}
const myList = new DoublyLinkedList();
myList.append(5);
myList.append(15);
myList.append(25);
myList.append(35);
myList.unshift(2);
console.log(myList);
//# sourceMappingURL=doublyLinkedList.js.map