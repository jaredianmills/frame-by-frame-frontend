import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import store from './store'
import Navbar from './components/Navbar'
// import ProjectsPage from './components/ProjectsPage'
import ProjectList from './components/ProjectList'
import Project from './components/Project'
import NoteForm from './components/NoteForm'
import LoginForm from './components/LoginForm'


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar style={{zIndex: 10}}/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route exact path="/profile" component={ProjectList} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </React.Fragment>

    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}


export default withRouter(connect(mapStateToProps)(App));

// {this.props.state.user ? null : <LoginForm />}
// {this.props.state.user ? <ProjectList style={{width: "20%", height: "100%"}}/> : null}
// {this.props.state.currentProject ? <Project id={this.props.state.currentProject.id}/> : null}
