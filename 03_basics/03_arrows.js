const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to this website!`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "harkirat"
// user.welcomeMessage()


function chai(){
    let username = "hitesh"
    console.log(this.username)
}

// chai()


// const coffee = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// coffee()

// const addTwo = (n1, n2) => {
//     return n1 + n2
// }

// const addTwo = (n1, n2) => (n1 + n2)

const addTwo = (n1, n2) => ({username: "hitesh"})

console.log(addTwo(3, 4));

myArr  = [2, 3, 4, 5, 6, 7, 8]

// myArr.array.forEach(() => {});