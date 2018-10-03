import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Loader, Card, Dimmer, Icon } from 'semantic-ui-react'
import * as actions from '../actions'
import Comment from './Comment'
import CommentForm from './CommentForm'

class Comments extends Component {

  componentDidMount = () => {
    this.props.fetchComments(this.props.currentNote.id)
  }

  renderComments = () => {
    if (this.props.comments.length > 0) {
      return this.props.comments.map(comment => <Comment key={comment.id} comment={comment} style={{fontFamily: 'Merriweather, serif'}}/>)
    } else {
      return <h2 style={{fontFamily: 'Merriweather, serif'}}>There are no comments on this note</h2>
    }
  }

  renderDimmer = () => {
    return (
      <Dimmer active inverted>
        <Loader size='large'>Loading Comments</Loader>
      </Dimmer>
    )
  }

  render() {
    console.log(this.props);
    return (
      <Modal open={this.props.displayComments}>
        <Button icon basic color="blue" style={{float: 'right', marginTop: '0.5%'}} onClick={this.props.hideComments}>
          <Icon name='times' />
        </Button>
        <Modal.Content>
          <br/>
          <Card style={{marginLeft: "33%"}} color='blue'>
            <Card.Content>
              <h3>Note:</h3>
              <Card.Header>{`${this.props.currentNote.user.first_name} ${this.props.currentNote.user.last_name} says:`}</Card.Header>
              <Card.Description style={{fontFamily: 'Merriweather, serif'}}>{this.props.currentNote.content}</Card.Description>
            </Card.Content>
          </Card>
          <h3 style={{fontFamily: 'Merriweather, serif'}}>Comments:</h3>
          {this.props.fetchingComments ? this.renderDimmer() : this.renderComments()}
          <CommentForm />
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideComments: () => {dispatch(actions.hideComments())},
    fetchComments: (noteId) => {dispatch(actions.fetchComments(noteId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
