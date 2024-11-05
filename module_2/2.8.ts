{
//Asynchronous typescript

// Promise

let promise : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});


// simulating an async function
const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data : string = "Something";
        if (data) {
            resolve(data);
        }else{
            reject("Error");
        }
    })
}

// calling create promise function
const showData = async(): Promise<string> =>{
    const data : string = await createPromise();
    console.log(data);
    return data;
}

showData();




// promise

type todo ={
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async () : Promise<todo>=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
    return data;
}


getTodo();


// 
}