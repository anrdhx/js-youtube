// function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
// }

// function addTwoNumbers(n1, n2){
//     let result = n1 + n2
//     return result
// }

// console.log(addTwoNumbers(3, 4))


// function loginUserMessage(username){
//     if (!username){
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in!`
// }

// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 500, 700))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "hitesh",
    price: 199
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))