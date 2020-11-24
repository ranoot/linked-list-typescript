import { SinglyLinkedList } from "./linked-list";

let coolLinkedList = new SinglyLinkedList([]);
coolLinkedList
    .insertAtEnd("4")
    .insertAtEnd("10");
console.log(coolLinkedList.length);
console.log(coolLinkedList.traverse());