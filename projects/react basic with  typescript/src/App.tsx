import { ReactNode, createContext, useState } from "react";
import Box from "./components/Box";

// create one unione data type for theme
type ThemeType = "light" | "dark";

// Create interface for theme context type
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

// Created context it is like redux use for state management
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// Created theme provider
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // useState for get and set vlaue of theme
  const [theme, setTheme] = useState<ThemeType>("light");

  // changing theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    // created provider and passed theme and fuction
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// use context3.
function App() {
  return (
    <ThemeProvider>
      <div>Hello</div>
      <Box />
    </ThemeProvider>
  );
}

export default App;
