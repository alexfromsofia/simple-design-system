import React from "react";
import ReactDOM from "react-dom";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <>
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Hello world</SecondaryButton>
    <TertiaryButton>Hello world</TertiaryButton>
    <PrimaryButton disabled>Hello world</PrimaryButton>
    <SecondaryButton disabled>Hello world</SecondaryButton>
    <TertiaryButton disabled>Hello world</TertiaryButton>
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
