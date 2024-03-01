import { Dispatch } from "react";

// type PropsType={
//     heading:string;
//     count?:number;
//     func1:(a:string)=>void;
//     children: ReactNode;
// }
// while passing parameter you have to specify type
//!type1:- const Box = ({ heading }: { heading: string }) => {

// ! type 2:-
// const Box = ({heading,count=25 , children}:PropsType) => {
type InputValType = string | number;
// ! genric type
const Box = <T extends InputValType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: Dispatch <React.SetStateAction<T>>;
}) => {
  return (
    <div>
      {/* <h1>{heading}</h1>
      {
        count && <p>{count}</p> //if exist then show
      }
      {/* <h5>{count} </h5> */}
      {/* {children}  */}

      <form action="">
        <label htmlFor="">{label}</label>
        <input type="text" name="" id="" value={value} onChange={(e)=>setter(e.target.value as T)} />
      </form>
    </div>
  );
};

export default Box;
