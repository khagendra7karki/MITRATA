// utility class that implements linked list using class
// in particuar this implements singly linked circular list

class Node {
    constructor(data) {
        this.count = 0;
        this.data = data
        this.next = null                
    }
}
class LinkedList {
    constructor(size = 10, head = null) {
        this.head = head
    }
    insertNode(image){
        let node = this.head;
        if(node == null){
            //Means it's just empty list
            this.head =  new Node( image );
            this.head.next = this.head
            return;
        }
        while (node.next =! this.head) {
            console.log( node.count )
            console.log( 'hello world')
            node = node.next;
        }
        node.next = new Node( image );
        node.next.next = this.head
        node.next.count = node.count + 1;
    }
    getNextNode(){
        let temp = this.head
        this.head = this.head.next
        return temp;
    }
    listSize() {
        let size = 0;
        let node = this.head;
        while (node) {
            size++;
            node = node.next;
        }
        return size;
    }
}

export default LinkedList