{
// Type guard using typeof & in


// Type guard

type alphaNeumeric = string | number;

const add = (param1: alphaNeumeric, param2: alphaNeumeric): alphaNeumeric => {

    if (typeof param1 === "string" && typeof param2 === "string") {
        return param1.toString() + param2.toString();
    } else if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }else {
        return 0;
    }
}


const result1 = add("John", "Doe");
const result2 = add(1, 2);
const result3 = add(2, "John");
const result4 = add(1, "Doe");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);






// in guard 

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: string;   
}

const user: NormalUser | AdminUser = {
    name: "John",
    role: "admin"
}

if ("role" in user) {
    console.log(user.role);
}else{
    console.log(user.name);
}















}