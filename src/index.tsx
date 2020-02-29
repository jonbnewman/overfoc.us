import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import { configure as mobxConfig } from "mobx";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

mobxConfig({ enforceActions: "observed" });

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
