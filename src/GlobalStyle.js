import { createGlobalStyle } from "styled-components";
import background from "../src/images/background.jpg";

export const GlobalStyle = createGlobalStyle`



html,
body {
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  padding: 0;
}
*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  background-color: lightgray;
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  min-height: 100vh;
}`;
