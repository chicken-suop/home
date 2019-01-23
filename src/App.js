import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from './helpers/styledComponentsConfig';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectExamples from './pages/ProjectExamples';

class App extends Component {
  static propTypes = {
    // history: PropTypes.shape({
    //   push: PropTypes.func.isRequired,
    // }).isRequired,
  }

  static contextTypes = {
    router: PropTypes.shape({}),
  }

  constructor() {
    super();
    this.sayHi();
    this.state = {
      scrollVal: 0,
      scrollingDown: true,
    };
  }

  componentDidMount() {
    window.addEventListener('wheel', this.calcScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.calcScroll);
  }

  sayHi = () => {
    console.log(
      '%c Designed and developed by Elliot "Ratskin" Schep\t\n > Site: https://ratsk.in/home\t\t\t\t\t\t\n > Github: https://github.com/ratskin/home\t\t\t%c\n',
      'background: black; padding:5px; font-size: 10px; color: #ffffff',
      '',
    );
  }

  calcScroll = (e) => {
    const { router } = this.context;
    // Clear our timeout throughout the scroll
    window.clearTimeout(this.isScrolling);

    this.setState((prevState) => {
      // Don't allow transitions, if already scrolling
      if (!prevState.loadingPage) {
        // Set scroll direction
        const scrollingDown = e.deltaY > 0;

        const scrollVal = prevState.scrollVal - e.deltaY;
        if (scrollVal < window.innerHeight * -0.2) {
          // We're scrolling down
          router.history.push('/about');
          return { scrollVal: 0, loadingPage: true, scrollingDown };
        } if (scrollVal > window.innerHeight * 0.2) {
          // We're scrolling up
          router.history.goBack();
          return { scrollVal: 0, loadingPage: true, scrollingDown };
        }
        return { scrollVal, scrollingDown };
      }
      return {};
    }, () => {
      // After scrolling ends, reset scrollVal, and stop off loading
      this.isScrolling = setTimeout(() => this.setState({
        scrollVal: 0,
        loadingPage: false,
      }), 300);
    });
  }

  render() {
    const { scrollingDown, scrollVal } = this.state;
    return (
      <div
        style={{
          overflow: 'hidden',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          cursor: 'ns-resize',
        }}
      >
        <div style={{
          zIndex: 1,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        >
          <Route
            exact
            path="/"
            component={Home}
          />
        </div>
        <div style={{
          transition: 'top .7s',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        >
          <Route
            exact
            path="/about"
            component={About}
          />
        </div>
        <div style={{
          transition: 'top .7s',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        >
          <Route
            exact
            path="/project-examples"
            component={Projects}
          />
          <Route
            exact
            path="/project-examples"
            component={ProjectExamples}
          />
        </div>
        <ScrollPage
          style={{
            top: `${(scrollingDown
              ? window.innerHeight + (scrollVal / 2)
              : (scrollVal / 2) - (window.innerHeight * 0.05)
            )}px`,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6
              0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7
              17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
            />
          </svg>
        </ScrollPage>
      </div>
    );
  }
}

const ScrollPage = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 2;

  > svg {
    fill: #fff;/*${theme.colours.blue};*/
    height: 4%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    left: 0;
    right: 0;
  }
`;

export default App;
