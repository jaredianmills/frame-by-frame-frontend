import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Navbar from './components/Navbar'
// import ProjectsPage from './components/ProjectsPage'
import ProjectList from './components/ProjectList'
import Project from './components/Project'
import NoteForm from './components/NoteForm'


class App extends Component {
  render() {
    // console.log(this.props.state);
    return (
        <React.Fragment>
          <Navbar style={{zIndex: 10}}/>
          <ProjectList style={{width: "20%", height: "100%"}}/>
          {this.props.state.currentProject ? <Project /> : null}
        </React.Fragment>

    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}


export default connect(mapStateToProps)(App);
