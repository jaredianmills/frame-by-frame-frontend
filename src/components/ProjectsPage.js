import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import ProjectList from './ProjectList';
import Project from './Project';

const ProjectPage = (props) => {
  // console.log(props);
  return (
    <div>
      <ProjectList />
      {/* <Route exact path={props.match.url} render={() => (
        <h3>Please select a Movie from the list.</h3>
      )}/> */}
      <Route path={`${props.match.url}/:props.project.id`} render={Project}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.user.projects
  }
}

export default connect(mapStateToProps)(ProjectPage)
