// for 

let arr = [1, 2, 3, 4, 5, 6]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element == 5) {
//         console.log("5 is printed");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}'s table:`);
//     for (let j = 1; j <= 10; j++)
//         console.log(`${i} * ${j} = ${i*j}`)
//     console.log("")
// }


let myArr = ["batman", "ironman", "superman", "flash"]

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}