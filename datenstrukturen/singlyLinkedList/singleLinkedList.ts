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
      return undefined
    }
    let pre: ListNode | null = null;
    let temp = this.head;
    if(!this.head.next){
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
}

const myList = new SinglyLinkedList();
myList.append(5)
myList.pop();
console.log(myList);


/* const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head); */
