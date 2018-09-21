import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import * as actions from '../actions'
import withAuth from '../hoc/withAuth'
import Project from './Project'

class ProjectList extends Component {
  constructor(props) {
    super(props)
  }

  handleProjectSelect = (project) => {
    this.props.selectProject(project)
  }

  render() {
    console.log(this.props);
    return (
      <div className="sidenav">
        <h1 style={{textAlign: 'center'}}>Projects</h1>
        <Menu inverted pointing vertical>
          {this.props.user.projects.map(project => {
            return (
              <Menu.Item style={{textAlign: 'center'}} key={project.id} name={project.title} onClick={() => this.handleProjectSelect(project)}/>
               // <Link key={project.id} to={`/projects/${project.id}`}>{project.title}</Link>
            )
          })}
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: (project) => dispatch(actions.selectProjectAction(project))
  }
}


export default withAuth(connect(mapStateToProps, mapDispatchToProps)(ProjectList))
