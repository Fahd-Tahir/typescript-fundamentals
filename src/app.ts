// fundamentals

// Node                                TypeScript
// number                              any
// string                              unknown
// boolean                             never
// null                                enum
// undefined                           tuple
// object                

let sales: number = 123_234_325_342;
let course: string = "TypeScript";
let is_published: boolean = false;

// we can add underscore in number to make it more readable

let level;

// if we do not specify a value to type to a var TS set it to any

// function render(document){
//     console.log(document);
// }

// Arrays
// let numbers: number[] = [1,2,3,4,5];
let numbers = [];
numbers[0] = 1;
numbers[1] = 2;

// fetching

numbers.forEach(n => n.toString);

// TS new type is tuple, fixed length array where each element has particular type, oftenyl use when working with values.

// Tuples

let couple : [number, string] = [1, "Fahd"];
console.log(couple[1]);


// ENUMS

// const small = 1;
// const medium = 2;
// const large = 3;


// beside this we group them together and initialize one memeber

enum Size{ Small = 1, Medium, Large}
let mySize : Size = Size.Medium;
console.log(mySize)

// function

function calculateIncome(income : number, taxYear = 2022) : number{
    if(taxYear < 2022){
        return income * 1.2;
    }else {
        return income;
    }
}

calculateIncome(10_000); 

// Objects

let employee: {
    readonly id: number,
    name: string
} = { id : 1, name: "Mosh"}
