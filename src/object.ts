// // ! Define a type of object
// type Obj = {
//   height: number;
//   weigth: number;
//   gender?: boolean; //! not include gender in every obj then use ?
// };

// const obj: Obj = {
//   gender: true,
//   height: 10,
//   weigth: 20,
// };
// const obj2: Obj = {
//   gender: false,
//   height: 10,
//   weigth: 20,
// };
// const obj3: Obj = {
//   height: 10,
//   weigth: 20,
// };

// // ! Interface like a class
// // interface can extends ,type not.

// type FuncType = (n: number, m: number) => void;

// interface Obj2 {
//   height: number;
//   weight: number;
//   func?: FuncType;
// }

// interface NewObj extends Obj2 {
//   name: string;
//   //   func?:(n:number ,m:number)=>void;
//   func?: FuncType;
// }

// interface Obj2 {
//   height: number;
//   weight: number;
// }

// const obj4: Obj2 = {
//   height: 10,
//   weight: 20,
// };

// const obj5: NewObj = {
//   height: 10,
//   weight: 20,
//   name: "test",
// };

// const obj6: NewObj = {
//   height: 10,
//   weight: 20,
//   name: "test",
//   func: (n, m) => {
//     console.log(m * n);
//   },
// };
