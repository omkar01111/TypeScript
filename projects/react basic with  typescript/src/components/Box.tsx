import { ThemeContext } from "../App";
import { useContext } from "react";

const Box = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="boxContainer"
      style={{ backgroundColor: theme === "dark" ? "rgb(40,40,40)" : "white" }}
    >
      <h1>Box 1</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Box;
