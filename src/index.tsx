import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #0058fb;
    color: white;
    
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <RecoilRoot>
        <ChakraProvider>
            <GlobalStyle />
            <App />
        </ChakraProvider>
    </RecoilRoot>
);
