const ns = [1, 2, 3]

// const total = ns.reduce( function (acc, curVal) {
//     console.log(`acc = ${acc} & curVal = ${curVal}`)
//     return acc + curVal
// }, 3 )

const total = ns.reduce( (acc, curVal) => acc + curVal, 3 )

// console.log(total)

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'cpp course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
]

const sum = shoppingCart.reduce( (sum, item) => sum + item.price, 0 )

console.log(sum)