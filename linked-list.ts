export class ListNode {
    constructor(public value: any, public next: ListNode | undefined) {}
}

export interface LinkedList {
    length: number;
    head: ListNode;
    tail: ListNode;
    getNode(index: number): ListNode;
    insertNodeAtEnd(value: any);
    deleteTailNode();
    insertNode(index: number, value: any);
    deleteNode(index: number);
    traverse(): any[];
}

export class SinglyLinkedList implements LinkedList {
    public head: ListNode;
    public tail: ListNode;
    
    constructor( ...nodeValues: any[] ) {
        const createListNode = (i: number): ListNode => new ListNode(nodeValues[i], undefined);
        const nodeValuesLength: number = nodeValues.length; 
        if (nodeValuesLength === 1) {
            this.head = createListNode(0);
            this.tail = this.head; // Since there is only one node, the head and the tail refer to the same node
        } else if (nodeValuesLength > 1) {
            let temp: ListNode; // Creates a temporary pointer in order to insert elements
            this.head = createListNode(0); 
            temp = this.head;
            for (let i = 1; i < nodeValuesLength; i++) { // i = 1 as head node is already defined
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

    getNode(index: number): ListNode {
        let temp: ListNode = this.head;
        for (let i = 0; i < index; i++) { temp = temp.next; }
        return temp;
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

    insertNodeAtEnd(value: any): SinglyLinkedList {
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

    insertNode(index: number, value: any): SinglyLinkedList {
        const listLength = this.length;
        if (index >= listLength) { throw new RangeError("Index provided exceeds the maximum index!"); }
        // if (index < 0 || !Number.isInteger(index)) { throw new RangeError("Index must be a non-negative integer!"); }
        // isInteger doesn't seemed to be recognised by Typescript Compiler
        if (index < 0) { throw new RangeError("Index must be a non-negative integer!"); }
        if (listLength === 1) { 
            // for cases where there is only one node, the only index is 0 and hence does not check for index 0
            // the new node added is now the head and the previous head is now the tail
            this.head = new ListNode(value, this.tail);
        } else if (index === 0) {
            // for cases that list length is != 1 and the head is replaced
            this.head = new ListNode(value, this.head);
        } else {
            // for other cases where the insertion is not at the head
            let temp1: ListNode = this.head; // 2 pointers are necessary, this one for reassigning the pointer (.next)
            let temp2: ListNode = this.head.next; // this one for setting the pointer (.next) of the new node
            for (let i = 0; i < index - 1; i++) { // traverses the list, setting the pointers in the correct positions
                temp1 = temp1.next;
                temp2 = temp2.next;
            }
            let newNode: ListNode = new ListNode(value, temp2);
            temp1.next = newNode;
        }
        return this;
    }

    deleteNode(index: number): SinglyLinkedList {
        const listLength = this.length;
        if (index >= listLength) { throw new RangeError("Index provided exceeds the maximum index!"); }
        if (index < 0) { throw new RangeError("Index must be a non-negative integer!"); }
        
        if (listLength === 1) {
            this.head = undefined; // test if only one is necessary
            this.tail = undefined;
        } else if (index === 0) {
            this.head = this.head.next
        } else {
            let temp1: ListNode = this.head;
            let temp2: ListNode = this.head.next.next;
            for (let i = 0; i < index - 1; i++) {
                temp1 = temp1.next;
                temp2 = temp2.next;
            }
            temp1.next = temp2;
        }
        return this;
    }
}
