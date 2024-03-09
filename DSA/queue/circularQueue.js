// circular Queue Data Structure using js 
// we will use prototyoe function to implement the circular queue 
// prototype function CircularQueue()
// CircularQueue.prototye.enqueue = function () {}

// prototype function
// circular queue is not dynamic size is fixed 
var CircularQueue = function (size) {
    this.queue = [];   // instance of the queue 
    this.size = size;  // size of the queue 
};

// enqueue function
CircularQueue.prototype.enQueue = function (element) {
    // size is fixed so we need to check 
    if(this.size === this.queue.length){
        return "Overflow: Queue is Full"
    }
    this.queue.push(element)
    return "Element Pushed"
};

// dequeue function
CircularQueue.prototype.deQueue = function () {
    // we need to ckeck is queue is already empty 
    if(this.queue.length === 0){
        return "Underflow: Queue is Empty"
    }
    return this.queue.shift();
};

// front/peek
CircularQueue.prototype.Front = function () {
    if(this.queue.length === 0) return "Underflow: Queue is Empty"
    return this.queue[0];
};

// Rear Function
CircularQueue.prototype.Rear = function () {
    if(this.queue.length === 0) return "Underflow: Queue is Empty"
    return this.queue[this.queue.length - 1];
};

// isEmpty function
CircularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0;
};

// isFull 
CircularQueue.prototype.isFull = function () {
    return this.queue.length  === this.size;
};

// we can also create a obj similar to class for out prototype function

var obj  = new CircularQueue(3);

obj.enQueue(1);
obj.enQueue(2);
obj.enQueue(3);

console.log("Rear:",obj.Rear());
console.log("Dequeue:", obj.deQueue())
console.log("Queue:", obj.queue);


// whenever you listen to music and put it on loop 