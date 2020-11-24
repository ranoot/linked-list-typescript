import { SinglyLinkedList } from "./linked-list";

let coolLinkedList = new SinglyLinkedList([]);
coolLinkedList
    .insertAtEnd("4")
    .insertAtEnd("10")
    .deleteTailNode();
console.log(coolLinkedList.traverse());