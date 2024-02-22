// ! Partial Type
// type User={
//     name:string,
//     email:string,
// }
// type User2=Partial<User>


// ! Requierd  ->Opposite of Partial
// type User={
//     name:string,
//     email:string,
// }
// type User2=Required<User>

// ! Readonly<Type> ->Mix every proprty readonly
// type User={
//     name:string,
//     email:string,
// }
// const user : Readonly<User>={
//     name:"Omi",
//     email:"om@gmail.com",
// }

// ! Record<Keys,Type>
// type User={
//     name:string;
//     email:string;
// }
// type User2 = Record<"name"|"email",string>

// ! Pick<Type,Keys> >_what nedded
// interface OrderInfo{
//     readonly id:string,
//     user:string,
//     city:string,

// }
// type shippingInfo=Pick<OrderInfo,"city"|"id">;

// ! omit<Type,Keys> _>  not nedded
// interface OrderInfo{
//     readonly id:string,
//     user:string,
//     city:string,

// }
// type shippingInfo=Omit<OrderInfo,"city"|"id">;

// ! Exclude<Union,ExcludedMembers> _>not want boolean
// type MyUnion =string|number |boolean;
// type Random =Exclude<MyUnion,boolean>

// ! Extract<Union,ExtractedMembers> _>want boolean
//  type MyUnion =string|number |boolean;
// type Random =Extract<MyUnion,boolean>

// ! NonNullable<Type> _>not null
// type MyUnion =string|number |boolean;
// type Random =Extract<MyUnion,undefined|null>



