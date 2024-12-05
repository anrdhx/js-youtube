// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log("DB Connected");
// }
// chai()

(function chai(){
    console.log("DB Connected");
}) ();

((name) => {
    console.log(`Hello ${name}`)
}) ("Ani");