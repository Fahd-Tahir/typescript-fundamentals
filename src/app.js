// fundamentals
// Node                                TypeScript
// number                              any
// string                              unknown
// boolean                             never
// null                                enum
// undefined                           tuple
// object                
var sales = 123234325342;
var course = "TypeScript";
var is_published = false;
// we can add underscore in number to make it more readable
var level;
// if we do not specify a value to type to a var TS set it to any
function render(document) {
    console.log(document);
}
// Arrays
// let numbers: number[] = [1,2,3,4,5];
var numbers = [];
numbers[0] = 1;
numbers[1] = 2;
// fetching
numbers.forEach(function (n) { return n.toString; });
// TS new type is tuple, fixed length array where each element has particular type, oftenyl use when working with values.
// Tuples
var couple = [1, "Fahd"];
console.log(couple[1]);
// ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;
// beside this we group them together and initialize one memeber
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var mySize = Size.Medium;
console.log(mySize);
