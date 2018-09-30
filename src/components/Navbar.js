import React from 'react'
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react'
// import { Redirect } from 'react-router-dom'
import * as actions from '../actions'

const Navbar = (props) => {
  const background = require(`../images/mochaGrunge.png`)
  return(
    <div>
    <Menu style={{

      backgroundColor: 'rgba(17, 17, 17, 0.3)',
      boxShadow: '2px 2px 20px black', color: 'white', textShadow: '2px 2px 8px black'}}>
      <Menu.Item>
        <h1 style={{color: 'white', textShadow: '2px 2px 8px black'}}>Frame by Frame</h1>
      </Menu.Item>
        {props.loggedIn ? <Menu.Item >
          {props.loggedIn ? <Button inverted color='facebook' style={{width: '130px'}} onClick={props.toggleProjectList}>{props.visibleProjectList ? 'Hide Projects' : 'View Projects'}</Button> : null}
        </Menu.Item> : null}

        {props.loggedIn ? <Menu.Item ><Button inverted color='facebook' onClick={props.renderNewProjectForm}>New Project</Button></Menu.Item> : null}

        {props.loggedIn ? <Menu.Item >
          {props.loggedIn ? <Button inverted color='facebook' onClick={props.logOut}>Log Out</Button> : null}
        </Menu.Item> : null}

        {props.user ? <h1 style={{marginLeft: '2%', marginBottom: '1.25%'}}>Welcome, {props.user.first_name}</h1> : null}

    </Menu>
  </div>
  )
}

function mapStateToProps(state) {
  return state
}

function mapDispatchtoProps(dispatch) {
  return {
    logOut: () => {dispatch(actions.logOut())},
    renderNewProjectForm: () => {dispatch(actions.renderNewProjectForm())},
    toggleProjectList: () => dispatch(actions.toggleProjectList())
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Navbar)
