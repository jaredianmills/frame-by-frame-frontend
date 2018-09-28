import React from 'react'
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react'
// import { Redirect } from 'react-router-dom'
import * as actions from '../actions'

const Navbar = (props) => {
  const background = require(`../images/binding_light.png`)
  return(
    <div>
    <Menu style={{backgroundImage: `url(${background})`}}>
      <Menu.Item>
        <h1>Frame by Frame</h1>
      </Menu.Item>
        {props.loggedIn ? <Menu.Item >
          {props.loggedIn ? <Button color='blue' onClick={props.logOut}>Log Out</Button> : null}
        </Menu.Item> : null}
        {props.loggedIn ? <Menu.Item ><Button color='blue' onClick={props.renderNewProjectForm}>New Project</Button></Menu.Item> : null}
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
    renderNewProjectForm: () => {dispatch(actions.renderNewProjectForm())}
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Navbar)
