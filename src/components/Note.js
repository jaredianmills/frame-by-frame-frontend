import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Icon } from 'semantic-ui-react'
import * as actions from '../actions'

class Note extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfComments: this.props.note.comments.length
    }
  }

  componentDidUpdate = () => {
    // console.log(this.props.numberOfComments);
    // if (this.props.note.comments.length > this.state.numberOfComments) {
    //   this.setState({numberOfComments: this.props.note.comments.length})
    // }
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

  render() {
    // console.log(this.props);
    return (
      <Card style={{margin: '1%', width: '100%'}}>
        <Card.Content>
          <Card.Header>{`${this.props.note.user.first_name} ${this.props.note.user.last_name}`} says</Card.Header>
          <Card.Description>{this.props.note.content}</Card.Description>
          <Card.Meta>Timecode: {this.displayTimecode()}</Card.Meta>
          <Card.Meta>Status: {this.props.note.completed ? 'Completed' : 'Not Completed'}</Card.Meta>
          <br/>

          <Button size='tiny' animated basic color='blue' onClick={this.goToNote}>
            <Button.Content visible > Go to Note </Button.Content>
            <Button.Content hidden> <Icon name='video play'/> </Button.Content>
          </Button>

          <Button size='tiny' animated basic color='blue' onClick={this.viewComments}>
            <Button.Content visible> Comments ({this.props.numberOfComments}) </Button.Content>
            <Button.Content hidden> <Icon name='comments'/> </Button.Content>
          </Button>

          {/* <br/><br/> */}
          <Button size='tiny' animated basic color='blue' onClick={() => this.props.toggleNoteComplete(this.props.note)}>
            <Button.Content visible>
              {this.props.note.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </Button.Content>
            <Button.Content hidden>
              {this.props.note.completed ? <Icon name='times'/> : <Icon name='check'/>}
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVideoPlayTime: (time) => {dispatch(actions.setVideoPlayTime(time))},
    showComments: (note) => {dispatch(actions.showComments(note))},
    toggleNoteComplete: (note) => {dispatch(actions.toggleNoteComplete(note))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
