import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import React from "react";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Card = styled.div`
  background-color: red;
`;

// first-child last-child note? noth? 등등 last-child만 블루가 된다...
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card}:last-child {
    background-color: blue;
  }
`;

// themeProvider로 감싸줘서 가능! darkmode or 색맹.. 등등 테마를 로딩할 수 있어. depth가 themeProvider로부터 좀 있는데도 불구하고!
const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Form />
        <Form />
      </Container>
    </ThemeProvider>
  );
}

// theme이 어디에나 존재하는거야. 리덕스처럼
const Form = () => (
  <Card>
    <Button>Hello~~~~</Button>
  </Card>
);

export default App;
