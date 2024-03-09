// we need to implement the fibonacci series using recursion
// eg = 0,1,1,2,3,5,8,13 ......
// fibonacci number for n = 5  --> 3 

// basic implementation 

let n = 6;  // sixth number in the fibonacci series 

let n1  =0 , n2 =1 , n3;   // n3 is the nect term we will generate in loop 

// n1 = 0 , n2 = 1 --> n3 = n1+n2;   // n3 =1   // 0,1,1
// swapping the values
// n1 = n2;
// n2 = n3;

// n3 again becomes empty 

for(let i =1; i<= n ;i++){
    n3  = n1+n2;   // n3 has become 1 
    n1 = n2; // n1 becomes 1 
    n2 = n3   // n2 also becomes 1      // 0,1,1,2
}

console.log(n1) ;


//n1,n2,n3
// 0,1,1
// n1 = 1, n2=1
// n3 =2 

// 0,1,1,2,3,5 ,8 ,13
//       n1,n2,n3

// for (1 -->6 )
// implementing the same using recursion 


function fibRecursion(n) {
    // base case 
    if( n <= 1) return n;     // here 

    return fibRecursion(n-1) + fibRecursion(n-2);
}

console.log(fibRecursion(6));

