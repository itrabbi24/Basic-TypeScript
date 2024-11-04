// Ternary, optional chaining & nullish coalescing operator


// Ternary
let age : number = 30;
let isAdult : boolean = age >= 18 ? true : false;

// Optional chaining
let user : {
    name: string;
    age: number;
} = {
    name: "John",
    // age: 30
}

let userName = user?.name;

// Nullish coalescing operator
let userName2 = user?.name ?? "Guest";

