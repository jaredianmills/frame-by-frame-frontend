import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Navbar from './components/Navbar'
import ProjectList from './components/ProjectList'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Navbar />
          <Router>
            <Route path="/projects" component={ProjectList} />
          </Router>
        </React.Fragment>
      </Provider>

    );
  }
}

export default App;
