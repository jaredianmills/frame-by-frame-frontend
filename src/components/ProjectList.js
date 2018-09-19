import React from 'react'
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import Project from './Project'
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
    // match: state.match
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: (project) => dispatch(actions.selectProjectAction(project))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)


// {/* <Route exact path={`${props.match.url}/:${project.id}`} component={Project}/> */}
// <Route path={`${props.match.url}/:${props.project.id}`} render={(routerProps) => <Project {...routerProps}/>}/>
