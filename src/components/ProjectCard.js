import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import { selectProjectAction } from '../actions'

const ProjectCard = (props) => {
  console.log(props);
  return (
    <Card.Group style ={{padding: "1%", margin: "1%"}}>
      <Card onClick={() => props.selectProject(props.project)}>
        <Card.Content>
          <Image src='https://images-na.ssl-images-amazon.com/images/I/312kePL4zPL.png'/>
          <Card.Header style={{textAlign: "center"}}>
            {props.project.title}
          </Card.Header>
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
