// const userEmail = "h@hitesh.ai"
// const userEmail = []

// if (userEmail){
//     console.log("Got user email");
// }   else {
//     console.log("Email not registered");
    
// }


/*
falsy values

false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

// Everything else is a truthy value
// interesting truthy values:
// "0", "false", " ", [], {}, function(){}

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 4 ?? 3
// console.log(val1);
// val1 = null ?? 10
// console.log(val1);
// val1 = undefined ?? 10
// console.log(val1);


// Ternary Operator

const price = 100;
price >= 80 ? console.log("Price is greater than or equal to 80") : console.log("Price is lower than 80");

