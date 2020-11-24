export class ListNode {
    constructor(public value: any, public next: ListNode | undefined) {}
}

export class SinglyLinkedList {
    public head: ListNode;
    public tail: ListNode;
    
    constructor( nodeValueList: any[] ) {
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
        let arr: any[] = [];
        let temp: ListNode = this.head;
        while (temp) {
            arr.push(temp.value);
            temp = temp.next;
        }
        return arr;
    }

    insertAtEnd(value: any): SinglyLinkedList {
        const listNodeObj: ListNode = new ListNode(value, undefined)
        if (this.tail === undefined) {
            this.head = listNodeObj; // after insertion when list was initially empty, length is now 1
            this.tail = this.head;  // Hence, the single node is both the head and the tail
        } else {
            this.tail.next = listNodeObj;
            this.tail = this.tail.next;
        }
        return this; // returns the linked list object for method chaining 
    }

    deleteTailNode(): SinglyLinkedList {
        const newLength = this.length - 1;
        this.tail = undefined;
        for (let i = 1, temp: ListNode = this.head; i <= newLength; i++) {
            if (i === newLength) {
                this.tail = temp;
                this.tail.next = undefined;
            } else {
                temp = temp.next;
            }
        }
        return this;
    }
}

export const debug = (linkedList: SinglyLinkedList): void => {
    let temp: ListNode = linkedList.head.next; // defines pointer on the head of the linked list
    let arr: any[] = [linkedList.head];
    while (temp !== linkedList.tail) {
        arr.push(temp);
        temp = temp.next; // moves the pointer for the next loop
    }
    arr.push(linkedList.tail);
    console.info(arr);
}
