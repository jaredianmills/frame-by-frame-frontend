import React from 'react'
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react'
import * as actions from '../actions'

const Navbar = (props) => {
  return(
    <Menu style={{backgroundColor: 'lightblue', height: "auto", padding: '1%'}}>
      <Menu.Item>
        <h1>Frame by Frame</h1>
      </Menu.Item>
      <Menu.Item >
        {props.loggedIn ? <Button onClick={props.logOut}>Log Out</Button> : null}
        {!props.loggedIn ? <Button>Log In</Button> : null}
      </Menu.Item>
        {props.loggedIn ? <Menu.Item ><Button onClick={props.renderNewProjectForm}>New Project</Button></Menu.Item> : null}
    </Menu>
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
