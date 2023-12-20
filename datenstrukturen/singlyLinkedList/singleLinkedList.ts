class ListNode {
  value: number;
  next: ListNode | null = null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  length: number = 0;

  //Add Item at the end of the list
  append(value: number) {
    const listNodeValue = new ListNode(value);
    if (this.length === 0) {
      this.head = listNodeValue;
      this.tail = this.head;
    } else {
      this.tail!.next = listNodeValue;
      this.tail = listNodeValue;
    }
    this.length++;
    return this;
  }

  //remove last item and set new tail
  pop() {
    if (this.head === null) {
      return undefined;
    }
    let pre: ListNode | null = null;
    let temp = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail!.next = null;
    this.length--;
    return temp;
  }

  //remove the first item of the list
  shift() {
    if (this.head === null) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currentHead;
    }
    this.length--;
    return currentHead;
  }

  //add item at the beginning of the list
  unshift(value: number) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  //get a node from specific index
  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode?.next as ListNode;
      counter++;
    }
    return currentNode;
  }

  //change the value of a node item with a specific index
  set(value: number, index: number) {
    let currentNode: ListNode | null | undefined = this.get(index);
    if (currentNode == undefined) {
      return false;
    } else {
      currentNode.value = value;
    }
    return true;
  }

  //add node on a specific index
  insert(value: number, index: number) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index == this.length) return this.append(value);
    let prevNode = this.get(index - 1);
    let currentNode = prevNode!.next;
    let newNode = new ListNode(value);
    prevNode!.next = newNode;
    newNode!.next = currentNode as ListNode;
    this.length++;
    return true;
  }

  //removes node on a specific index
  remove(index: number) {
    if (index < 0 || index > this.length) return undefined;
    let currentNode = this.get(index);
    if (index === 0) return this.shift()?.value;
    if (index === this.length) return this.pop()?.value;
    if (index > 0 && index < this.length) {
      let prevNode = this.get(index - 1);
      let nextNode = currentNode?.next;
      prevNode!.next = nextNode as ListNode;
    }
    this.length--;
    return currentNode?.value;
  }

  //reverse the list
  reverse() {
    /*     let currentHead = this.head;
    let next = null;
    let prev = null;

    while (currentHead !== null) {
      next = currentHead.next;
      currentHead.next = prev;
      prev = currentHead;
      currentHead = next;
    }

    this.tail = this.head;
    this.head = prev;
    this.tail!.next = null;
    return this; */
    let node = this.head as ListNode | null;
    this.head = this.tail;
    let next = null as ListNode | null;
    let prev = null as ListNode | null;
    while (node !== null) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const myList = new SinglyLinkedList();
myList.append(5);
myList.append(15);
myList.append(25);
myList.append(35);
myList.reverse();
console.log(myList);
