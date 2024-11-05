{
// 


// Generic with Interface


interface Developer<T, X = null>{
    name: string;
    computer:{
        brand: string;
        model: string;
        releasedYear: number;
    }
    smartWatch: T,
    bike?: X
}

type WatchType ={
        brand: string;
        model: string;
        releasedYear: number;
}

const poorDeveloper : Developer<WatchType> = {
    name: "John",
    computer: {
        brand: "Dell",
        model: "XPS",
        releasedYear: 2020
    },
    smartWatch: {
        brand: "Apple",
        model: "Watch",
        releasedYear: 2020
    }
}

interface RichWatch {
        brand: string;
        model: string;
        releasedYear: number;
        sleepTracker: boolean;
        heartRateMonitor: boolean
}

interface Bike {
        model: string;
        brand: string;
        year: number
}

const richDeveloper : Developer<RichWatch, Bike> = {
    name: "Rich Developer",
    computer: {
        brand: "Dell",
        model: "XPS",
        releasedYear: 2020
    },
    smartWatch: {
        brand: "Apple",
        model: "Watch",
        releasedYear: 2020,
        sleepTracker: true,
        heartRateMonitor: true
    },
    bike: {
        model: "Honda",
        brand: "Bike",
        year: 2020
    }
}




// 
}
