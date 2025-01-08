class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value); // Create a node like the Circle with number inside
        this.head = newNode; // NewNode is the head or the first or starting point
        this.tail = this.head;
        this.length = 1;
    }
    
    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    
    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }
    
    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }
    
    getLength() {
        console.log("Length: " + this.length);
    }
    
    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    /// WRITE PUSH METHOD HERE ///
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    
}



let myLinkedList = new LinkedList(1);
myLinkedList.makeEmpty();
myLinkedList.push(1);
myLinkedList.push(2);


myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Linked List:
    1
    2

*/