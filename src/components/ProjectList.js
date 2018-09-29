import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
// import { Redirect } from 'react-router'
// import { Link, Route } from 'react-router-dom';
import * as actions from '../actions'
import withAuth from '../hoc/withAuth'
import Project from './Project'
import NewProjectForm from './NewProjectForm'

class ProjectList extends Component {
  constructor(props) {
    super(props)
  }

  handleProjectSelect = (project) => {
    this.props.selectProject(project)
    this.props.fetchProject(project.id)
  }

  displayNewProjectForm = () => {
    if (this.props.displayNewProjectForm ) {
      return <NewProjectForm />
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="projectlist">
        <h1 style={{textAlign: 'center', color: 'white', textShadow: '2px 2px 8px black'}}>Projects</h1>
        <hr/>
        {/* <Menu inverted pointing vertical> */}
          {this.props.user.projects.map(project => {
            return (
              <React.Fragment key={project.id}>
                <Button inverted color='facebook' style={{textAlign: 'center', margin: 'auto', width: '100%'}} name={project.title} onClick={() => this.handleProjectSelect(project)}>
                  {project.title}
                </Button>
                <br/>
                <br/>
              </React.Fragment>
            )
          })}
        {/* </Menu> */}
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


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
