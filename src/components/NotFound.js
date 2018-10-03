import React from 'react'
import { Button } from 'semantic-ui-react'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const background = require(`../images/debut_dark.png`)

const NotFound = () => {
  return (
    <React.Fragment>
      <div style={{width: "30%", height: 'auto', marginLeft: '33%', marginTop: '15%', padding: '1%', boxShadow: '2px 2px 10px black', backgroundImage: `url(${background})`, textAlign: 'center', outline: '2px solid black', color: 'white', textShadow: '1px 1px 2px black'}}>
        <h1 style={{color: 'white', textShadow: '2px 2px 8px black', fontFamily: 'Merriweather, serif'}}>Page Not Found</h1>
        <Button style={{fontFamily: 'Merriweather, serif'}} inverted color="facebook">
          <Link style={{textDecoration: "none", color: "white"}} to="/projects">Back</Link>
        </Button>
      </div>
    </React.Fragment>
  )
}

const handleClick = () => {
  console.log('clicked');
  return <Redirect to="/projects" />
}

export default withRouter(NotFound)
