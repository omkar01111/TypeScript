// ! Function with Objects

// ! Method 1: Defining function with inline object type
// const getData = (product: {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
// }): void => {
//   console.log(product);
// };

//! Method 2 (Recommended way): Using type and interface for better readability and reusability
// Define type for function parameter
// type GetDataType = (product: {
//     name: string;
//     stock: number;
//     price: number;
//     photo: string;
// }) => void;

// Define interface for product
// interface Product {
//     name: string;
//     stock: number;
//     price: number;
//     photo: string;
//     readonly id: number;
// }

// Use defined type with interface for the function
// const getData: GetDataType = (product) => {
//     console.log(product);
// };

// Create a product object
// const productOne: Product = {
//     name: "MacBook",
//     stock: 1,
//     price: 1500000,
//     photo: "https://apple.com",
//     id: 45789,
// };

// Call the function with the product object
// getData(productOne);

// ! Never Type: Used for values that never occur
// Define a type with specific values
// type ThemeMode = "light" | "dark";

// Assign a value with specific type
// const mode: ThemeMode = "dark";

// Function that never returns (throws an error)
// const errorHandler = (): never => {
//     throw new Error("Error Occurred");
// }
