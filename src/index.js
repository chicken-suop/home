import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import aileronRegular from './assets/fonts/Aileron/Aileron-Regular.otf';
import bigJohn from './assets/fonts/Big John Slim Joe/BIG JOHN.otf';
import finlandRoundedThin from './assets/fonts/Finland/Finland Rounded Thin.otf';

// Inject global styles
const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: Aileron;
     src: url('${aileronRegular}') format('opentype');
  }
  @font-face {
     font-family: BigJohn;
     src: url('${bigJohn}') format('opentype');
  }
  @font-face {
     font-family: FinlandRounded;
     src: url('${finlandRoundedThin}') format('opentype');
  }

  :root {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Aileron', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
    position: relative;

    :not(.without)::after {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      opacity: 0;
      border-bottom: 2px solid;
      transform: scaleX(0);
      transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1);
      bottom: -.625rem;
    }

    :not(.without):hover::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  * {
    outline: none;
    box-sizing: border-box;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader-hidden');
const hideLoader = () => loader.classList.add('loader-hidden');

// setTimeout(() => {
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <App
        showLoader={showLoader}
        hideLoader={hideLoader}
      />
      <GlobalStyle />
    </>
  </Router>,
  document.getElementById('root'),
);
// }, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
