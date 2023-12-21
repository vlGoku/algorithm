class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;
  constructor(val: T) {
    this.value = val;
  }
}

class DoublyLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length: number = 0;

  //Add Item at the end of the list
  append(value: T) {
    const newNode = new ListNode(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
      this.tail!.prev = prev;
    }
    this.length++;
    return this;
  }

  //remove last item and set new tail
  pop() {
    if (this.head === null) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = currentTail?.prev as ListNode<T>;
    this.tail.next = null;
    this.length--;
    return currentTail;
  }

  //remove the first item of the list
  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = this.head?.next as ListNode<T>;
    this.head.prev = null;
    currentHead!.next = null;
    this.length--;
    return currentHead;
  }

  //add item at the beginning of the list
  unshift(value: T) {
    let newNode = new ListNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.head!.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  //get a node from specific index
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = null;
    let middle = Math.floor(this.length / 2);
    if (index <= middle) {
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode?.next as ListNode<T>;
        counter++;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        currentNode = currentNode?.prev as ListNode<T>;
        counter--;
      }
    }
    return currentNode;
  }

  //change the value of a node item with a specific index
  set(value: T, index: number) {
    let currentNode = this.get(index);
    if (currentNode == undefined) {
      return false;
    } else {
      currentNode.value = value;
    }
    return true;
  }

  //add node on a specific index
  insert(value: T, index: number) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index == this.length) return this.append(value);
    let prevNode = this.get(index - 1);
    let currentNode = prevNode!.next;
    let newNode = new ListNode(value);
    prevNode!.next = newNode;
    newNode!.next = currentNode as ListNode<T>;
    newNode.prev = prevNode;
    this.length++;
    return true;
  }

  //removes node on a specific index
  //remove

  //reverse the list
  //reverse
}

const myList = new DoublyLinkedList<number>();

myList.append(5);
myList.append(15);
myList.append(25);
myList.append(35);
myList.append(55);
myList.append(65);
myList.insert(45, 4);
console.log(myList.get(4)?.value);
