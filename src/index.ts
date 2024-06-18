import reverseLinkedList from "./algorithms/reverseLinkedList"
import LinkedList from "./data_structures/LinkedList/LinkedList"
import LinkedListNode from "./data_structures/LinkedList/LinkedListNode"

const linkedList = new LinkedList()
linkedList.append(14)
linkedList.append(17)
linkedList.append(21)
linkedList.appendNode(new LinkedListNode(23))

linkedList.printList()

const reversed = reverseLinkedList(linkedList)
reversed.printList()

