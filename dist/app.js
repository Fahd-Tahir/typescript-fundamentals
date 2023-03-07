"use strict";
var _a;
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
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(100);
kgToLbs("100kgs");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let weight = 50;
let measure = 'inch';
function greetings(name) {
    if (name) {
        console.log(name.concat(' Hola'));
    }
    else
        console.log("Hola");
}
greetings(null);
greetings("react");
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
//# sourceMappingURL=app.js.map