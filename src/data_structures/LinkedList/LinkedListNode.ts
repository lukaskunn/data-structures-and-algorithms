export default class LinkedListNode {
    value: Number
    next: LinkedListNode | null

    constructor(value: Number) {
        this.value = value
        this.next = null    
    }
}