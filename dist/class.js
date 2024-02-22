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
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const product1 = new Product("laptop", 20000);
