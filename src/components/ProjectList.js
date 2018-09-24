import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { Link, Route } from 'react-router-dom';
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
    // const proj = this.props.user.projects.find(({ id }) => id === match.params.projectId)
    return (
      <div className="sidenav">
        <h1 style={{textAlign: 'center'}}>Projects</h1>
        {/* <Menu inverted pointing vertical> */}
          {this.props.user.projects.map(project => {
            return (
              <React.Fragment key={project.id}>
                <Button style={{textAlign: 'center'}} name={project.title} onClick={() => this.handleProjectSelect(project)}>
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
    selectProject: (project) => dispatch(actions.selectProjectAction(project))
  }
}


export default withAuth(connect(mapStateToProps, mapDispatchToProps)(ProjectList))
