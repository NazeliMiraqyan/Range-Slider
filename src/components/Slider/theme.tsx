import React from "react";
import { ThemeProvider } from "styled-components";
import { Itheme } from "./types";

const theme: Itheme = {
  colors: {
    dusty_gray: "#959595",
    gray: "#ddd",
    dark_gray: "#080808",
    black: "#000",
    red: "#FF0000",
    blue: "#2196f3",
    green: "#315827",
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
