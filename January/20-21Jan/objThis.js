// this keyword 

let laptop1 = {
    cpu:"i9",
    ram:16,
    brand:"HP",
    compare: function(laptop) {
        if(this.cpu>laptop.cpu){
            console.log(laptop1);
        } else {
            console.log(laptop2)
        }
    }
}

let laptop2 = {
    cpu:"i7",
    ram:16,
    brand:"HP",
}

// what if i want to return any property of the object
//console.log(laptop.displayCpu());

// condition for fetching a higher spec laptp


//laptop1.compare(laptop2);

// this keyword provides a refernce to the current object


// constructor functions 
// use case of constructor functions 

function UserInfo(userName,userAge){
    this.name = userName,
    this.age = userAge
}

let user1 = new  UserInfo("xyz" ,"12");
let user2 = new  UserInfo("abc" ,"45");

console.log(user1);
console.log(user2);