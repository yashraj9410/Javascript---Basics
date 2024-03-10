// linked list data structure 
// linked list is  a linear data structure 

// Node is the most basic unit of linked list 
// Node consist of two parts that is the data part and the reference/pointer  part 
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Linked List is Created with the help of the Node class
class LinkedList {
    constructor() {
        this.head = null; // initially linked list is empty , we will insert the elements 
    }

    // add a element at the begining/head of the linked list 
    addFirst(data){
        const newNode  = new Node(data);  // instance of the node class
        newNode.next = this.head;    // new node will be the head of linked list 
        this.head = newNode;         // the newly created node will be my head node 
    }

    // add a element at the tail/end of the linked list 
    addLast(data) {
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        // if my linked list is not empty 
        // we need to traverse through the list and find the last element and then add the n
        // new Node 

        let current =  this.head; // we will start from the first element 
        while(current.next) {       // until a null is not found 
            current = current.next;
        }

        current.next = newNode;    // attach the new Node at the end 
    }

    // add a element at a given index in the linked list
    addAt(index ,data){
        if(index <0 || index>this.size()) {
            return "Invalid Index";
        }
        if(index === 0){
            this.addFirst(data);    // add the begining 
            return;
        }

        let current = this.head;
        for(let i = 0; i<index-1; i++){
            current = current.next;
        }

        const newNode = new Node(data);
        newNode.next = current.next;
        current.next = newNode;
        
    }

    // size function for linked list 
    size() {
        let current = this.head;
        let count =0;         // this count is going to return the complete size of out linked list 
        while(current.next){
            count++;
            current = current.next;
        }
        return count;
    }

    // remove element from the top of linked list 
    removeTop() {
        if(!this.head) {
            return "List is Empty";
        }
        this.head = this.head.next;
    }

    // remove from the end of linkedlist 
    removeLast() {
        // similar to add Last function 
        if(!this.head){
            return "List is Empty "
        }

        let current  = this.head;
        while(current.next.next){
            current = current.next;
        }

        current.next  = null;
    }

    // remove a element from linked list at a given index 
    removeAt(index){
        if(index<0 || index>this.size()){
            return "Invalid Index"
        }

        if(index === 0){
            this.head = this.head.next;
        }

        let current  = this.head;
        for(let i = 0;i<index-1;i++){
            current = current.next
        }

        if(current.next){
            current.next = current.next.next;
        }
    }

    // printing the linked list 
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}


// creating the instance for the linked list class 
const linkedList  = new LinkedList();

linkedList.addFirst(5);
linkedList.addFirst(3);
linkedList.addFirst(8);

//linkedList.printList();

linkedList.removeTop();
linkedList.printList();

// task test all the functions that we have created and try to debug by yourself 
