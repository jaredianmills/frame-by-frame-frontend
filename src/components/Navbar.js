import React from 'react'
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react'
import * as actions from '../actions'

const background = require(`../images/debut_dark.png`)


const Navbar = (props) => {
  return(
    <div>
    <Menu style={{
      backgroundImage: `url(${background})`,
      boxShadow: '2px 2px 5px black', color: 'white', textShadow: '2px 2px 8px black',
      outline: '2px solid black'
    }}>
      <Menu.Item>
        <h1 style={{color: 'white', textShadow: '2px 2px 8px black'}}>Frame by Frame</h1>
      </Menu.Item>
        {props.loggedIn ?
          <React.Fragment>
            <Menu.Item>
              <Button inverted color='facebook' style={{width: '130px'}} onClick={props.toggleProjectList}>
                {props.visibleProjectList ? 'Hide Projects' : 'View Projects'}
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Button inverted color='facebook' onClick={props.renderNewProjectForm}>
                New Project
              </Button>
            </Menu.Item>

            <Menu.Item >
              <Button inverted color='facebook' onClick={props.logOut}>Log Out</Button>
            </Menu.Item>

            <h1 style={{marginLeft: '2%', marginBottom: '1.25%'}}>Welcome, {props.user.first_name}</h1>
          </React.Fragment>

          : null}

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
