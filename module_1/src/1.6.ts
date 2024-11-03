// 1-6 Function in typescript


// Normal Function

function add(a: number, b: number) {
    return a + b
}

add(1, 2);

// Default value with function
function addDefault(a: number = 10, b: number) {
    return a + b
}

add(1, 2);


// Arrow Function

const add1 = (a: number, b: number): number => {
    return a + b
}


const arr : number[] = [1, 2, 3];

const newArray: number[] = arr.map((elem:number) => elem * 2);
