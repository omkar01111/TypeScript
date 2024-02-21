// !function with objects

// ! Method 1
// const getData = (product: {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
// }): void => {
//   console.log(product);
// };

//! Method 2 (Recomended way)
// type GetDataType=(product:{
//     name: string;
//   stock: number;
//   price: number;
//   photo: string;
// })=>void;

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//  readonly id:number
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne :Product= {
//   name: "MackBook",
//   stock: 1,
//   price: 1500000,
//   photo: "https://apple.com",
//   id:45789,
// };

// getData(productOne);

// ! Never Type

// type themeMode="light"|"dark";

// const mode:themeMode="dark";

// const errorHandler=():never=>{
//     throw new Error("Error Occured");

// }
