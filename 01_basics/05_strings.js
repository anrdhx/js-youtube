const name = "aniruddha"

console.log(`My name is ${name}.`)


const gameName = new String("gta-7-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'))

const miniString = gameName.substring(-2,2)
console.log(miniString);

const anotherString = gameName.slice(1, 4)
console.log(anotherString);

const url = "https://anrdh.com/aniruddha%20manke"

console.log(url.replace('%20', '-'));

console.log(url.includes(".com"));

console.log(gameName.split('-'))


