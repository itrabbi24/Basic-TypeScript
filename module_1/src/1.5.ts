// 1-5 Object , Optional and Literal Types

// Object
let person = {
    name: "John",
    age: 30
};

// Reference Type--> Object

const user: {
    firstName: string;
    middleName?: string; // optional
    lastName: string;
} = {
    firstName: "John",
    // middleName: "Doe",
    lastName: "Smith"
}


// literal type
// Reference Type--> Object

const user1: {
    companyName: "Google";
    firstName: string;
    middleName?: string; // optional
    lastName: string;
} = {
    companyName: "Google", // the customer name type
    firstName: "John",
    // middleName: "Doe",
    lastName: "Smith"
}


// Optional
let person2 = {
    name: "John",
    age: 30
};

// Literal
let person3 = {
    name: "John",
    age: 30
};
