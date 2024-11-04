// Type assertion / type narrowing


// Type assertion
let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;

// Type narrowing
let someValue2: any = "This is a string";
let strLength2: number = (someValue2 as string).length

