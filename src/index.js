import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { SignUpModal } from "./components/Modal";
import { PrimaryButton } from "./components";

const ContentWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.primaryBackgroundColor};
`;

const ButtonWrapper = styled(ContentWrapper)`
  height: 10vh;
  z-index: 10;
  position: relative;
`;

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const theme = isDarkTheme ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper>
        <PrimaryButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Switch Theme
        </PrimaryButton>
        <PrimaryButton onClick={() => setShowModal(!showModal)}>
          Toggle Modal
        </PrimaryButton>
      </ButtonWrapper>
      <ContentWrapper>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </ContentWrapper>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
