"use strict";
// class Player {
//   public readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power?: number
//   ) {
//     this.id = String(Math.random() * 1000);
//   }
//   get getMyHeight(): number {
//     return this.height;
//   } //!geter function for accesing private variable
//   set changeHeight(val: number) {
//     //!seter function
//     this.height = val;
//   }
// }
// const om = new Player(100, 150);
// console.log(om.weight);
// console.log(om.getMyHeight);
// om.changeHeight = 900;
// console.log(om.getMyHeight);
// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getMyPower = () => {
//     return this.power;
//   };
// }
// const om2 = new Player2(100, 150, 200, true);
// console.log("Power ", om2.getMyPower());
// console.log("Height ", om2.getMyHeight());
// console.log("weight ", om2.weight);
// console.log("special  ", om2.special);
// !interFace 
// interface ProductType{
//     name:string;
//     price:number;
//     }
//     class Product implements ProductType{
//         constructor(public name:string, public price:number){
//         }
//     }
//     const product1=new Product("laptop",20000);
