import { SinglyLinkedList } from "./linked-list";

console.log("---start---")

let coolLinkedList = new SinglyLinkedList(2, 3);

coolLinkedList
    .insertNode(0, 1)
    .insertNodeAtEnd(4)
    .insertNodeAtEnd(5)
    .insertNode(0, 0);

console.log(coolLinkedList.getNode(0).value);
console.log(coolLinkedList.traverse());