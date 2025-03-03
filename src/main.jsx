import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter}  from 'react-router-dom'
import AppContextProvider from "./context/AppContext";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
 
      <BrowserRouter>
      <AppContextProvider>
          <App />  
      </AppContextProvider> 
      </BrowserRouter>
     

);
