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
`;

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const theme = useDarkTheme ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <ButtonWrapper>
        <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>
          Switch Theme
        </PrimaryButton>
      </ButtonWrapper>
      <ContentWrapper>
        <SignUpModal />
        <GlobalStyle />
      </ContentWrapper>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
