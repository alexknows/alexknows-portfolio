import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from "./Routes";

const browserHistory = createBrowserHistory();

if (typeof window !== "undefined" && window.history && typeof window.history.scrollRestoration === "string") {
  window.history.scrollRestoration = "manual";
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
