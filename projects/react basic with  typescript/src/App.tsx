import { FormEvent, useState } from "react";
// import Box from "./components/Box";

interface Person {
  name: string;
  age: number;
}

function App() {
  // const [val,setVal]= useState<string>("");
  const [user, setUser] = useState<Person>({ name: "", age: 0 });

  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(user);
    
  }
  return (
    <>
      <div>Hello</div>
      {/* <Box
        heading="Hello world"
            // func1={(a: string) => {
            //   alert(a);
            // }}
            // childern={<>lol</>}
      >
        {<button>Click Me</button>}
      </Box> */}

      {/* <Box  label="Search" value={val} setter={setVal}/> */}

      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input
          type="number"
          value={user?.age|| ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
          }
          placeholder="Enter Your Age"
        />
        <input
          type="text"
          value={user?.name||""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, name: e.target.value }))
          }
          placeholder="Enter Your Age"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
