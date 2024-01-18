"use strict";
const sum = (x, y) => x + y;
const value = sum(2, 2);
console.log(value);
const sum2 = (x, y) => {
    return (x + y).toString();
};
const value2 = sum2(2, 2);
console.log(value2);
const sum3 = (x, y) => {
    console.log(x + y);
};
const log = (message) => {
    console.log(message);
};
log("Hello world!!!");
sum3(24, 2);
