//! Type Assertion

//!telling typescript ke terai baap ko maat sikha

// const btn = document.getElementById("btn") as HTMLElement; //!telling it is html element to ty
// const btn = <HTMLElement> document.getElementById("btn");
const btn = document.getElementById("btn")!;

// const img=document.getElementById("myimg")as HTMLImageElement;
// img.src
// btn.onclick;

// const form = document.getElementById("myForm") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;
// form.onsubmit = (e) => {
//   e.preventDefault();
//   const value = Number(myinput.value);

//   const h2 = document.createElement("h2");
//   h2.textContent = String(value + 20);

//   const body = document.querySelector("body")!;
//   body.append(h2);
// };

interface Person {
  name: string;
  email: string;
}

const myObj: Person = {
  name: "omi",
  email: "Omi@gmail.com",
};
console.log(myObj.name);

let key="name";

myObj[key as keyof typeof myObj];

// const getName = (): string => {
//   return myObj["name"];
// };
// const getEmail = (): string => {
//   return myObj["email"];
// };

const getData = (key: keyof Person): string => {
  return myObj[key];
};

getData("name");
