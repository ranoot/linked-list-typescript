import { SinglyLinkedList } from "./linked-list";

console.log("---start---")

let coolLinkedList = new SinglyLinkedList([2, 3]);

coolLinkedList.insertNode(0, 1);

console.log(coolLinkedList.traverse());