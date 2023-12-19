"use strict";
class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const listNodeValue = new ListNode(value);
        if (this.length === 0) {
            this.head = listNodeValue;
            this.tail = this.head;
        }
        else {
            this.tail.next = listNodeValue;
            this.tail = listNodeValue;
        }
        this.length++;
        return this;
    }
}
const myList = new SinglyLinkedList();
myList.append(5);
myList.append(7);
myList.append(12);
myList.append(34);
console.log(myList);
/* const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head); */ 
