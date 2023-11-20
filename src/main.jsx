import React from "react";
import ReactDOM from "react-dom/client";

import { Update } from "./pages/Update";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global"
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Update />
    </ThemeProvider>
  </React.StrictMode>
);
