// ! Define a type of object

// Define a type for an object with optional property
// type Obj = {
//     height: number;
//     weight: number;
//     gender?: boolean; //! not include gender in every obj then use ?
// };

// Create objects using the defined type
// const obj: Obj = {
//     gender: true,
//     height: 10,
//     weight: 20,
// };

// const obj2: Obj = {
//     gender: false,
//     height: 10,
//     weight: 20,
// };

// const obj3: Obj = {
//     height: 10,
//     weight: 20,
// };

// // ! Interface like a class
// // interface can extend, type cannot.

// Define a function type
// type FuncType = (n: number, m: number) => void;

// Define an interface for objects
// interface Obj2 {
//     height: number;
//     weight: number;
//     func?: FuncType; // Function property is optional
// }

// Define an interface extending another interface
// interface NewObj extends Obj2 {
//     name: string;
//     func?: FuncType; // Function property is optional
// }

// Re-declaring Obj2 interface is unnecessary as it's already declared above

// Create objects using the interfaces
// const obj4: Obj2 = {
//     height: 10,
//     weight: 20,
// };

// const obj5: NewObj = {
//     height: 10,
//     weight: 20,
//     name: "test",
// };

// const obj6: NewObj = {
//     height: 10,
//     weight: 20,
//     name: "test",
//     func: (n, m) => {
//         console.log(m * n);
//     },
// };
