// Mapped types

{

    const arrOfNumbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const arrOfStrings: string[] = arrOfNumbers.map((elem: number) => elem.toString());

    console.log(arrOfStrings);



    type AreaNumber = {
        height: number;
        width: number;
    }

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // keyOf Operator
    // type AreaString ={
    //     [key in keyof AreaNumber]: string;
    // }

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaString<{height: string; width: string}> = {
        height: "10",
        width: "20"
    }; 

}