import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';

class App extends Component {
  render() {
    return (
      <>
        <Route
          path="/"
          component={Home}
          exact
        />
        {/* <Route
          path="/about"
          component={About}
          exact
        /> */}
      </>
    );
  }
}

export default App;
