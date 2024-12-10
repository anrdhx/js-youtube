// for of

// ["", "", ""]
// [{}, {}, {}]

const obj = [1, 2, 3, 4, 5]
const obj2 = ["batman", "ironman", "deadpool", "docstrange"]
const obj3 = "aniruddha"

// for (const element of obj3) {
//     console.log(element);
// }

// Maps

const map = new Map();
map.set("in", "india")
map.set("us", "united states")
map.set("uk", "united kingdom")
map.set("fr", "france")
map.set("us", "united states")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ": ", value)
}

const myObj = {
    "game1": "gta",
    "game2": "tod",
    "game3": "nfs",
    "game4": "f1",
    "game5": "minecraft",
    "game6": "valorant",
    "game7": "fortnite",
}

// for (const element of object) {
//     console.log(element);
// }


