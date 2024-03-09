// queue data structure 
// whoever will come at first will be served at first 
// FIFO -> First in First out order
// Element pushed at first will be popped at first 
// LILO -> Last in Last out order.
// enqueue(element) --> add the elements in tha back of the queue 
// dequeue() --> remove the element from the front 
// peek() --> shows the first element in the front of queue 
// isEmpty() --> checks if the queue is empty or not 
// size() --> shows the size of the queue 

// implementation of queue 

class Queue {
    constructor() {
        this.items = [];   // we will be performing all the queue operations on items 
    }

    // functions to manipulate the queue 
    enqueue(element) {
        this.items.push(element);   // push at the back 
    }

    // for removing the element 
    dequeue(){
        if(this.isEmpty()) {
            return "Underflow: Queue is empty"
        }
        return this.items.shift()     // removes the element from the front 
    }

    // is Empty function 
    isEmpty() {
        return this.items.length === 0;
    }

    // size function 
    size(){
        return this.items.length;
    }

    // peek function
    peek() {
        if(this.isEmpty()){
            return "Queue is Empty";
        }
        return this.items[0];
    }
}

// making the object and implementing the functionalities 
const queue  = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);



queue.dequeue();  //  1 removed 

console.log(queue.peek())
console.log("Size:" , queue.size());
console.log(queue.isEmpty())
console.log(queue.items);