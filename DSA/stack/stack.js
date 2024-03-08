// stack Data Structure 

// basic stack implementation (OOps)

class Stack {
    constructor() {
        this.stack = []  // empty stack initialisation
    }

    // we will declare all the functions 

    // push function to push the element into the stack
    push(element){
        this.stack.push(element);
    }

    // pop fucntion to remove the element from the stack
    pop() {
        if(this.isEmpty()) {   // if my stack is Empty
            return "Underflow: Stack is empty"
        }
        return this.stack.pop();
    }

    // isEmpty function to check if my stack is empty ot not
    isEmpty() {
        return this.stack.length === 0;
    }

    // peek function 

    peek() {
        if(this.isEmpty()){
            return "stack is empty"
        }

        return this.stack[this.size()-1];
    }

    // size function

    size(){
        return this.stack.length
    }
}

// write a function to print all the elements in the stack 
// write a function to reverse the stack 


// creating an object for the stack class 

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());  // popped the last element 
console.log(stack.peek())  // peek the last element 