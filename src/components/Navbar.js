import React from 'react'
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react'

const Navbar = (props) => {
  return(
    <Menu style={{backgroundColor: 'lightblue', height: "auto", padding: '1%'}}>
      <Menu.Item>
        <h1>Frame by Frame</h1>
      </Menu.Item>
      <Menu.Item >
        <Button>Log-in</Button>
      </Menu.Item>
      <Menu.Item >
        <Button>New Project</Button>
      </Menu.Item>
    </Menu>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Navbar)
