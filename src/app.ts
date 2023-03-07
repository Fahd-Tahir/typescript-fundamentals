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

//Object // type alias

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void,
}

let employee : Employee = { 
    id : 1,
    name: "Mosh", 
    retire: (date: Date) => {
    console.log(date);
}}

// union operators
// an input can be either on of the two objects.

function kgToLbs(weight: number | string){
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(100);
kgToLbs("100kgs");

// intersection operators
// let say we have two objects and a function is both so that function is called Intersection

type Draggable = {
    drag: () => void;
}

type Resizeable = {
    resize: () => void;
}

type UiWidget = Resizeable | Draggable;

let textBox : UiWidget = {
    drag: () => {},
    resize: () => {},
}

// Literals
// let say we have a variable and its value can be one out of the range i.e. 50 or 100 but not other than that we use literals for that.

// first example
let weight: 50 = 50;

// using typeAlias
type Measurements = 'inch' | 'centimeter';

//success
let measure: Measurements = 'inch'
//failure
// let waist: Measurements = 'millimeter'

// nullable

function greetings(name: string | null | undefined){
    if(name){
        console.log(name.concat(' Hola'))
    }else 
        console.log("Hola")
}

greetings(null);

greetings("react");

// Optional operator for null

type Customer = {
    birthday ?: Date
};

function getCustomer(id: number): Customer| null | undefined {
    return id == 0 ? null : {birthday : new Date()}
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear);
