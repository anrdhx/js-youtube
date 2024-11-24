// Stack (Primitive), Heap (Non-Primitive)

let myName = "Mr Xyz"
let anotherName = myName
console.log(anotherName);

anotherName = "Mr Abc"
console.log(myName);
console.log(anotherName);

let userone = {
    email: "user@abc.com",
    upi: "user@ybl"
}

let usertwo = userone
console.log(usertwo);

usertwo.email = "changedemail.com"


console.log(userone)
console.log(usertwo)