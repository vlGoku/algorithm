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
        //change the value of a node item with a specific index
        //set
        //add node on a specific index
        //insert
        //removes node on a specific index
        //remove
        //reverse the list
        //reverse
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
    //remove last item and set new tail
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
    //remove the first item of the list
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
    //add item at the beginning of the list
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
    //get a node from specific index
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let counter = 0;
        let currentNode = null;
        let middle = Math.floor(this.length / 2);
        if (index < middle) {
            currentNode = this.head;
            while (counter !== index) {
                currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
                counter++;
            }
        }
        else {
            currentNode = this.tail;
            counter = this.length;
            while (counter !== index) {
                currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.prev;
                counter--;
            }
        }
        return currentNode === null || currentNode === void 0 ? void 0 : currentNode.value;
    }
}
const myList = new DoublyLinkedList();
myList.append(5);
myList.append(15);
myList.append(25);
myList.append(35);
myList.append(45);
myList.append(55);
myList.append(65);
console.log(myList.get(4));
//# sourceMappingURL=doublyLinkedList.js.map