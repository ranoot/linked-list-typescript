export class ListNode {
    constructor(public value: any, public next: ListNode | undefined) {}
}

export class SinglyLinkedList {
    public head: ListNode;
    public tail: ListNode;
    
    constructor(
        private headNodeValue: any, 
        private nodeValueList: any[], 
        private tailNodeValue: any
    ) {
        this.head = new ListNode(headNodeValue, undefined); 
        let temp: ListNode; // temporary pointer to access elements
        const createListNode = (i: number): ListNode => new ListNode(nodeValueList[i], undefined);

        this.head.next = createListNode(0);
        temp = this.head.next;

        if (!!nodeValueList.length) {
            for (let i = 1, length = nodeValueList.length; i < length; i++) {
            temp.next = createListNode(i);
            temp = temp.next;
            }
        }

        this.tail = new ListNode(tailNodeValue, undefined);
        temp.next = this.tail;
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
}
