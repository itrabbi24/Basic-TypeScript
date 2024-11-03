// 1-7 Spread and Rest Operator, destructuring


// Spread Operator
let numbers : number[] = [1, 2, 3];
let numbers2 : number[] = [4, 5, 6];
let newNumbers : number[] = [...numbers, ...numbers2];

numbers.push(...numbers2);

// Rest Operator
let newNumbers2 : number[] = [...numbers, 4, 5, 6];


// Destructuring
let address : [string, number] = ["Superstreet", 99];



const greetFriends = (...names: string[]) => {
    names.forEach((name: string) => console.log(name));
}

greetFriends("John", "Doe", "Smith");