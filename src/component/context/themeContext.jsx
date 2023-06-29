import { createContext } from "react";

const defaultValue = {
  theme: "light",
};

const themeContext = createContext(defaultValue);

export default themeContext;
