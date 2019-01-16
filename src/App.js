import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectExamples from './pages/ProjectExamples';

class App extends Component {
  constructor() {
    super();
    this.sayHi()
  }

  sayHi() {
    console.log(`
%c Designed and developed by Elliot "Ratskin" Schep\t
 > Site: https://ratsk.in/home\t\t\t\t\t\t
 > Github: https://github.com/ratskin/home          %c
`,
      "background: black; padding:5px; font-size: 10px; color: #ffffff",
      ""
    );
  }

  render() {
    return (
      <>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/"
          component={About}
        />
        <Route
          path="/"
          component={Projects}
        />
        <Route
          path="/"
          component={ProjectExamples}
        />
      </>
    );
  }
}

export default App;
