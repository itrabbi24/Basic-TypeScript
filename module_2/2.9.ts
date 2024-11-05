// Conditional types

{
// 

type a1 = null;
type b1 = undefined;

type x= a1 extends null ? true : false; // condition type
type y= b1 extends undefined ? true : false;
type y1 = a1 extends null ? true : b1 extends undefined ? undefined : any;




type jonDue = {
    Bike : string;
    car: string;
    ship: string;
}

// Key Of Operator

type keys = keyof jonDue;

// type checkVehicle<T> = T extends "Bike" | "Car" | "Ship" ? true : false;
type checkVehicle<T> = T extends keys ? true : false;

type isValid = checkVehicle<jonDue["Bike"]>


// 
}