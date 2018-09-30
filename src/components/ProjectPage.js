import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions'
import withAuth from '../hoc/withAuth'
import Project from './Project'
import NewProjectForm from './NewProjectForm'

class ProjectPage extends Component {

  handleProjectSelect = (project) => {
    this.props.selectProject(project)
    this.props.fetchProject(project.id)
  }

  displayNewProjectForm = () => {
    if (this.props.displayNewProjectForm) {
      return <NewProjectForm />
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        {this.props.currentProject ? <Project /> : null}
        {this.displayNewProjectForm()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: (project) => dispatch(actions.selectProject(project)),
    fetchProject: (id) => dispatch(actions.fetchProject(id))
  }
}


export default withAuth(connect(mapStateToProps, mapDispatchToProps)(ProjectPage))
