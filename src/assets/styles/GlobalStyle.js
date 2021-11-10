import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Monserrat', sans-serif;
  }
  
  a, button, li {
    font-family: 'Monserrat', sans-serif;    
  }
  
  .nav-link-item {
    text-decoration: none;
  }
`;
