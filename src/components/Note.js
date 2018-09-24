import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import * as actions from '../actions'

class Note extends Component {
  constructor(props) {
    super(props)
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

  handleClick = () => {
    this.props.setVideoPlayTime(this.props.note.timecode)
  }

  render() {
    return (
      <Card onClick={this.handleClick} style={{marginTop: '1%', marginLeft: "20%", marginBottom: '1%'}}>
        <Card.Content>
          <Card.Header>{`${this.props.note.user.first_name} ${this.props.note.user.last_name}`} says</Card.Header>
          <Card.Description>{this.props.note.content}</Card.Description>
          <Card.Meta>Timecode: {this.displayTimecode()}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setVideoPlayTime: (time) => {dispatch(actions.setVideoPlayTime(time))}
  }
}

export default connect(null, mapDispatchToProps)(Note)
