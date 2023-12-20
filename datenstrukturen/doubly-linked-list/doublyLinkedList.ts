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

  get(index: number) {}
}

const myList = new DoublyLinkedList<number>();

myList.append(5);
myList.append(15);
myList.append(25);
myList.append(35);
myList.unshift(2);
console.log(myList);
