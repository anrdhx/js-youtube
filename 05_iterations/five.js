const coding = ["js", "ruby", "java", "cpp", "csharp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (index) => {
//     console.log(index)
// } )

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {console.log(item, index, arr)} )

const myCoding = [
    {
        langName: "javascript",
        langFile: "jsFile"
    },
    {
        langName: "python",
        langFile: "dotpy"
    },
    {
        langName: "c++",
        langFile: "dotcpp"
    },
]

myCoding.forEach( (item) => {console.log(item.langName, item.langFile)} )