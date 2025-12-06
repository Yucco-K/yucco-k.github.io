import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ bg: string }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-family: 'system-ui', 'Avenir', 'Helvetica', 'Arial', sans-serif;
    background: ${({ bg }) => bg};
    color: #fff;
    transition: background 0.6s;
  }
  #root {
    min-height: 100%;
  }
`;

