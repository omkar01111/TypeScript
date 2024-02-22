"use strict";
//! Type Assertion
//!telling typescript ke terai baap ko maat sikha
// const btn = document.getElementById("btn") as HTMLElement; //!telling it is html element to ty
// const btn = <HTMLElement> document.getElementById("btn");
const btn = document.getElementById("btn");
const myObj = {
    name: "omi",
    email: "Omi@gmail.com",
};
console.log(myObj.name);
let key = "name";
myObj[key];
// const getName = (): string => {
//   return myObj["name"];
// };
// const getEmail = (): string => {
//   return myObj["email"];
// };
const getData = (key) => {
    return myObj[key];
};
getData("name");
