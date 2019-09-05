import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #fff;
    height: 100%;
  }
`;

export const Content = styled.div`
  grid-area: content;
  position: relative;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 5vh 90vh 5vh;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  
`;
