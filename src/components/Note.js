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

  goToNote = () => {
    this.props.setVideoPlayTime(this.props.note.timecode)
  }

  viewComments = () => {
    this.props.showComments(this.props.note)
  }

  render() {
    return (
      <Card style={{margin: '1%', width: '100%'}}>
        <Card.Content>
          <Card.Header style={{fontFamily: 'Oswald, sans-serif'}}>{`${this.props.note.user.first_name} ${this.props.note.user.last_name}`} says</Card.Header>
          <Card.Description style={{fontFamily: 'Roboto, sans-serif'}}>{this.props.note.content}</Card.Description>
          <Card.Meta style={{fontFamily: 'Oswald, sans-serif'}}>Timecode: {actions.displayTimecode(this.props.note.timecode)}</Card.Meta>
          <Card.Meta style={{fontFamily: 'Oswald, sans-serif'}}>Status: {this.props.note.completed ? 'Completed' : 'Not Completed'}</Card.Meta>
          <br/>

          <Button size='tiny' animated basic color='blue' onClick={this.goToNote}>
            <Button.Content visible style={{fontFamily: 'Merriweather, serif'}}> Go to Note </Button.Content>
            <Button.Content hidden> <Icon name='video play'/> </Button.Content>
          </Button>

          <Button size='tiny' animated basic color='blue' onClick={this.viewComments}>
            <Button.Content visible > Comments ({this.props.numberOfComments}) </Button.Content>
            <Button.Content hidden style={{fontFamily: 'Merriweather, serif'}}>
              <Icon name='comments'/>
            </Button.Content>
          </Button>

          <Button size='tiny' animated basic color='blue' onClick={() => this.props.toggleNoteComplete(this.props.note)}>
            <Button.Content visible style={{fontFamily: 'Merriweather, serif'}}>
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
