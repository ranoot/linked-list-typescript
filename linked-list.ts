export class ListNode {
    constructor(public value: any, public next: ListNode | undefined) {}
}

export class SinglyLinkedList {
    public head: ListNode;
    public tail: ListNode;
    
    constructor( private nodeValueList: any[] ) {
        const createListNode = (i: number): ListNode => new ListNode(nodeValueList[i], undefined);
        const nodeValueListLength: number = nodeValueList.length; 
        if (nodeValueListLength === 1) {
            this.head = createListNode(0);
            this.tail = this.head; // Since there is only one node, the head and the tail refer to the same node
        } else if (nodeValueListLength > 1) {
            let temp: ListNode; // Creates a temporary pointer in order to insert elements
            this.head = createListNode(0); 
            temp = this.head;
            for (let i = 1; i < nodeValueListLength; i++) { // i = 1 as head node is already defined
                temp.next = createListNode(i);
                temp = temp.next; // Moves the pointer up by 1
            }
            this.tail = temp // The last node (is referenced by temp) is the tail
        }
    }

    get length(): number {
        let len: number = 0;
        let temp: ListNode = this.head;
        if (temp === undefined) {
            return 0;
        } else {
            do {
                len++;
                temp = temp.next;
            } while (!!temp) // checks whether the next value is undefined
            return len;
        }
    }

    traverse(): any[] {
        let temp: ListNode = this.head.next;
        let arr: any[] = [this.head.value];
        while (temp !== this.tail) {
            arr.push(temp.value);
            temp = temp.next;
        }
        arr.push(this.tail.value);
        return arr;
    }

    insertAtEnd(value: any) {

    }
}
