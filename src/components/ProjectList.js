import React from 'react'
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react'
import * as actions from '../actions'

const ProjectList = (props) => {
  return (
    <div className="sidenav">
      <h1 style={{textAlign: 'center'}}>Projects</h1>
      <Menu inverted pointing vertical>
        {props.projects.map(project => {
          return (
            <Menu.Item style={{textAlign: 'center'}} key={project.id} name={project.title} match={props.match} onClick={() => props.selectProject(project)}/>
          )
        })}
      </Menu>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.user.projects,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: (project) => dispatch(actions.selectProjectAction(project))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
