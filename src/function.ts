// type funcType = (n: number, m: number, l?: number) => number;

// const func: funcType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;  //if we want to add optonal paramiter

//   return n * m * l;
// };

// func(25, 23);

// !default parameters
// type funcType = (n: number, m: number, l?: number) => number;
// const func: funcType = (n, m, l=20) => { //default valur of l
// return n * m * l;
// };

// func(25, 23);

// ! Rest Operator

// method 1
// const func = (...m: number[]) => {
//   return m;
// };
// func(25, 23, 34, 58, 92);

// method 2
// type FuncType = (...m: number[]) => number[];
// const func2: FuncType = (...m) => {
//   return m;
// };
// func2(25, 23, 34, 58, 92);

// ! normal function
// type FuncType = (n: number) => number;

// const lol:FuncType=function lol(n){
//     return n;
// }

