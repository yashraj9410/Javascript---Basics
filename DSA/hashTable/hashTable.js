// Hash Table Implementation
// class HashTable 

// set , get , remove , hashing function 

class HashTable {
    constructor(size){
        this.table = new Array(size); //[ [01,"india"] ]
        this.size = size;
    }

    hash(key){
        // chatCodeAt
        let total = 0;
        for(let i = 0; i< key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;     // ensure that my total lies always between 0-50      
    }

    // set function to set the key value pairs in the table  
    set(key,value) {
        const index = this.hash(key);
        //this.table[index] = value;
         const bucket  = this.table[index];
        // first check if the reference is empty 
        if(!bucket){
            this.table[index] = [[key,value]];
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value;
            } else {
                bucket.push([key,value]);
            }
            
        }
    }

    // get function 
    get(key){
        const index = this.hash(key);
        //return this.table[index];
        const bucket  = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined;
    }

    // remove method -> delete the value at given index
    remove(key){
        const index = this.hash(key);
        // this.table[index] = undefined;  // task to check for the edge cases 
        const bucket  = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1);
            }
        }
    }

    // display hash table 
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){    
                console.log(i,this.table[i]);
            }
        }
    }
}


const table = new HashTable(50);
table.set("name", "bruce");
table.set("age", 25);
table.set("mane" ,"ajbdajid");
table.set("name","yash");
table.display();
console.log(table.get("name"));
table.remove("name");
table.display();