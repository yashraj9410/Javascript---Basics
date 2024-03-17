// doubly linked list data structure 


// we will have node class that will have three sections 
// 1. data 
// 2. prev reference/pointer 
// 3. next reference/pointer 

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// implementing the linked List 
class DoublyLinkedList {
    constructor(){
        this.head = null;
    }

    // add a element at the top/begining of the linked list 
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;  // case when head is not present 
        if(this.head){
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    // add a element at the end of the linked list 
    addLast(data) {
        const newNode  = new Node(data);

        // edge case when linked list is empty (head is not there)
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current  = this.head;

        while(current.next){
            current = current.next;
        }

        // it will come out of loop when null found 
        newNode.prev = current;
        current.next = newNode;
    }

    // add a element in the given index in the linked List 
    addAt(index,data){

        const newNode = new Node(data);  
        // check the edge cases 
        if(index<0 || index > this.size()){
            return "Invalid Index";
        } 

        if(index == 0){
            // insert at head;
            newNode.next = this.head;
            if(this.head){
                this.head.prev = newNode;
            }
            this.head = newNode;
        }

        let current  = this.head;
        for(let i = 0;i<index;i++){
            current = current.next;
        }

        newNode.prev = current;
        newNode.next = current.next;

        if(current.next){
            current.next.prev = newNode;
        }
        current.next = newNode;
        
    }

    // size function for linked list 
    size() {
        let count = 0;

        // traverse the linked list 
        let current  = this.head;
        while(current){
            current = current.next;
            count++;
        }
        return count ;
    }

    // remove head 
    removeFirst(){
        if(!this.head){
            return "List is Empty";
        }
        this.head = this.head.next;

        if(this.head){
            this.head.prev = null;
        }
    }

    // remove Last
    removeLast() {
        if(!this.head){
            return "List is Empty";
        }

        // second edge case when there is only one element 
        if(!this.head.next){
            this.head = null;
            return;
        }

        // traverse the list until the last element
        let current  = this.head;
        while(current.next.next){
            current  = current.next;
        }
        current.next = null;
    }

    // remove a element from the given index in the linked list 
    removeAt(index) {
        if(index < 0  || index > this.size() ) {
            return "Invalid Index";
        }

        if(index === 0){
            // remove head
            this.head = this.head.next;
            if(this.head){
                this.head.prev = null;
            }
        }

        let current  = this.head;
        // now iterate through the loop 
        for(let i =0; i<index-1;i++){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next;
            if(current.next){
                current.next.prev = current;
            }
        }
    }

    // print the linked list / traversal 
    printList(){
        let current  = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

// linked list is totally based on OOps 
// browser forwrd and backward 

// write a function to print the  reversed linked list 

// try to reverse the linked list 