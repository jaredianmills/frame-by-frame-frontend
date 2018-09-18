import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './Navbar'
import ProjectList from './ProjectList'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Navbar />
          <ProjectList />
        </React.Fragment>
      </Provider>

    );
  }
}

export default App;
