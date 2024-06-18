import LinkedList from "../data_structures/LinkedList/LinkedList";
import LinkedListNode from "../data_structures/LinkedList/LinkedListNode";

const reverseLinkedList = (linkedList: LinkedList): LinkedList => {
    let reversed = new LinkedList()
    var prev = null;
    var current = linkedList.head;
    var next = null;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    if(prev != null){
        reversed.appendNode(prev)
    }
    return reversed;
}

export default reverseLinkedList