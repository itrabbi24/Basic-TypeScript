{


// Constraint using key of

// Constraint using keyof Operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner = "bike" | "car" | "ship"; // manually

type Owner2 = keyof Vehicle; // automatically

const parson1: Owner = "bike";

const user11 = {
    name: "John",
    age: 30,
    address: "123 Main Street"
}



const getPropertyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}



const result1 = getPropertyValue(user11, "name");



}