import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartType, decrement, increment, incrementByValue } from "./redux";

function App() {
  const [val, setVal] = useState<number>(0);
  const dispatch = useDispatch();

  const count = useSelector((state: StartType) => state.count);

  const incrementHandler=()=>{
    dispatch(increment());
  }
  const decrementHandler=()=>{
    dispatch(decrement());
  }
  const incrementHandlerByVal = () => {
    setVal(0);
    dispatch(incrementByValue(val));
  };

  return (
    <div>
      <h1>ToolKit</h1>
      <h2>Count = {count}</h2>
      <button  onClick={decrementHandler} >-</button>
      <button onClick={incrementHandler}>+</button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button disabled={val < 0} onClick={incrementHandlerByVal}>
        ADD
      </button>
    </div>
  );
}

export default App;
