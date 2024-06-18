import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  head: LinkedListNode | null | undefined;

  constructor() {}

  append(value: Number): void {
    const newNode = new LinkedListNode(value);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  appendNode(node: LinkedListNode): void {
    if (this.head == null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  printList(): void {
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode?.value);
      currentNode = currentNode?.next;
    }
  }
}
