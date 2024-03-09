// reverse a string using recursion

// str = hello  -->  str.substr(1)  -> ello  , emitted the first character 
//  revString(ello) + h
//  revString(llo) + e + h  --> olleh

function revString(str) {
    // return the reversed string 

    if(str === ""){
        return "";
    }
   
    return revString(str.substr(1)) + str.charAt(0);

}

console.log(revString("hello"))
// basic approach -- > take first element and last element and swap both until first <= last while

// task to try to reverse an array using recursion 
// generarte a tree and stack to understand the intution behind recursion 

