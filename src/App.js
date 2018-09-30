import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Navbar from './components/Navbar'


import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import SignupForm from './components/SignupForm'
import NewProjectForm from './components/NewProjectForm'


import ProjectPageWithHideableSidebar from './components/ProjectPageWithHideableSidebar'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar style={{zIndex: 10}}/>
        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/projects" /> } />
          <Route exact path="/projects" component={ProjectPageWithHideableSidebar} />
          <Route exact path="/newproject" component={NewProjectForm}/>}/>
          {/* <Route path={`/projects/:projectId`} component={Project}/> */}
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          <Route component={NotFound} />
        </Switch>
        {/* {this.props.state.currentProject ? <Project /> : null} */}
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
