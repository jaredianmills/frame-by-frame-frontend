import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

class Note extends Component {
  constructor(props) {
    super(props)
  }

  displayTimecode = () => {
    let minutes = Math.floor(this.props.note.timecode / 60)
    let seconds = Math.round(this.props.note.timecode - minutes * 60)

    minutes = minutes.toString()
    seconds = seconds.toString()

    minutes.length > 1 ? minutes : minutes = "0" + minutes
    seconds.length > 1 ? seconds : seconds = "0" + seconds

    return `00:${minutes}:${seconds}`
  }

  render() {
    return (
      <Card style={{marginTop: '1%', marginLeft: "20%", marginBottom: '1%'}}>
        <Card.Content>
          <Card.Meta>Timecode: {this.displayTimecode()}</Card.Meta>
          <Card.Description>{this.props.note.content}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default Note
