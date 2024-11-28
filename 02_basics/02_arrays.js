const m_heroes = ["thor", "loki", "falcon"]
const d_heroes = ["batman", "superman", "flash"]

// m_heroes.push(d_heroes)

// console.log(m_heroes);
// console.log(m_heroes[3]);
// console.log(m_heroes[3][1]);

// const heroes = m_heroes.concat(d_heroes)
// console.log(heroes);

const heroes = [...m_heroes, ...d_heroes]
// console.log(heroes);

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(newArr);
const realArr = newArr.flat(Infinity)
// console.log(realArr);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
