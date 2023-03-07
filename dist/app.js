"use strict";
let sales = 123234325342;
let course = "TypeScript";
let is_published = false;
let level;
let numbers = [];
numbers[0] = 1;
numbers[1] = 2;
numbers.forEach(n => n.toString);
let couple = [1, "Fahd"];
console.log(couple[1]);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateIncome(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income;
    }
}
calculateIncome(10000);
let employee = { id: 1, name: "Mosh" };
//# sourceMappingURL=app.js.map