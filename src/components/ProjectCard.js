import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import { selectProjectAction } from '../actions'
import { Route, Link } from 'react-router-dom'
import Project from './Project'

const ProjectCard = (props) => {
  return (
    <Card.Group style ={{padding: "1%", margin: "1%"}}>
      <Card>
        <Card.Content>
          <Image src='https://images-na.ssl-images-amazon.com/images/I/312kePL4zPL.png'/>
          <Card.Header style={{textAlign: "center"}}>
            {props.project.title}
          </Card.Header>
          {/* <Link key={props.project.id} to={`/projects/${props.project.id}`}>Go to Project</Link> */}
        </Card.Content>
      </Card>

    </Card.Group>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: (project) => dispatch(selectProjectAction(project))
  }
}

export default connect(null, mapDispatchToProps)(ProjectCard)

// onClick={() => props.selectProject(props.project)}
