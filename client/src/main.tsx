import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { App } from "@/App";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { ScopedCssBaseline } from '@mui/material';
import theme from './theme';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider>
          <ScopedCssBaseline>
            <App />
          </ScopedCssBaseline>
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);