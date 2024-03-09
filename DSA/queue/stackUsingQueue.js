// implement the stack data structure using queue 

// we will do this with the prtotype function

var Stack  = function() {
    this.q1 = [];
    this.q2 =[];
};
// q1 -> [4,2,3,5] 
// [4]
//q2 [2,3,5]
Stack.prototype.push = function (element) {
    while(this.q1.length !== 0){
        this.q2.push(this.q1.shift());
    }
    
    this.q1.push(element); //main point   so that this element is always present at first 
    
    while(this.q2.length !==0 ){
        this.q1.push(this.q2.shift())
    }
};

Stack.prototype.pop = function () {
    // task to add ths check that queue is not empty
    return this.q1.shift();
};

Stack.prototype.empty = function () {
    return this.q1.length === 0;
};

Stack.prototype.peek = function () {
    return this.q1[0];
};

var obj  = new Stack();

obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)  // last in 
console.log(obj.peek());