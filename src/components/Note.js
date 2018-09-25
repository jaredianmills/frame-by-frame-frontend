import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'
import * as actions from '../actions'

class Note extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate = () => {
    console.log('updated');
  }

  displayTimecode = () => {
    let minutes = Math.floor(this.props.note.timecode / 60)
    let hours = Math.floor(minutes / 60)
    let seconds = Math.round(this.props.note.timecode - minutes * 60)

    if (hours > 0) {
      minutes = minutes - (hours * 60)
    }

    hours = hours.toString()
    minutes = minutes.toString()
    seconds = seconds.toString()

    hours.length > 1 ? hours : hours = "0" + hours
    minutes.length > 1 ? minutes : minutes = "0" + minutes
    seconds.length > 1 ? seconds : seconds = "0" + seconds

    return `${hours}:${minutes}:${seconds}`
  }

  goToNote = () => {
    this.props.setVideoPlayTime(this.props.note.timecode)
  }

  viewComments = () => {
    this.props.showComments(this.props.note)
  }

  markAsComplete = () => {
    console.log(`Note ${this.props.note.id} is complete`)
  }

  render() {
    console.log(this.props);
    return (
      <Card style={{margin: '1%', width: '100%'}}>
        <Card.Content>
          <Card.Header>{`${this.props.note.user.first_name} ${this.props.note.user.last_name}`} says</Card.Header>
          <Card.Description>{this.props.note.content}</Card.Description>
          <Card.Meta>Timecode: {this.displayTimecode()}</Card.Meta>
          <br/>
          <Button onClick={this.goToNote}>Go to Note</Button>
          <Button onClick={this.viewComments}>Comments ({this.props.note.comments.length})</Button>
          <Button onClick={this.markAsComplete}>Complete</Button>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVideoPlayTime: (time) => {dispatch(actions.setVideoPlayTime(time))},
    showComments: (note) => {dispatch(actions.showComments(note))}
  }
}

export default connect(null, mapDispatchToProps)(Note)
