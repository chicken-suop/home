import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

// Inject global styles
const GlobalStyle = createGlobalStyle`
  @import url('./assets/fonts/Aileron/Aileron-Regular.otf');
  @import url('./assets/fonts/Big\ John\ Slim\ Joe/BIG\ JOHN.otf');
  @import url('./assets/fonts/Finland/Finland\ Rounded\ Thin.otf');

  :root {
    font-size: 62.5%;
  }

  body {
    background: #E1605F;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Aileron', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
