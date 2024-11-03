// 1-8 Destructuring in typescript


// Destructuring
let address : [string, number] = ["Superstreet", 99];


// Array Destructuring
const myFriend = ["John", "Doe", 30];

let [,, age, ...rest] = myFriend;