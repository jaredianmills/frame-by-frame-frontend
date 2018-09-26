import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message, TextArea, Header, Modal, Loader, Card } from 'semantic-ui-react'
import * as actions from '../actions'
import Comment from './Comment'
import CommentForm from './CommentForm'

class Comments extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.fetchComments(this.props.currentNote.id)
  }

  renderComments = () => {
    if (this.props.comments.length > 0) {
      return this.props.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
    } else {
      return <h2>There are no comments on this note</h2>
    }
  }

  render() {
    console.log(this.props);
    return (
      <Modal open={this.props.displayComments}>
        <Button style={{float: 'right'}} onClick={this.props.hideComments}>x</Button>
        <Modal.Content>
          <br/>
          <Card style={{marginLeft: "30%"}} color='blue'>
            <Card.Content>
              <h3>Note:</h3>
              <Card.Header>{`${this.props.currentNote.user.first_name} ${this.props.currentNote.user.last_name} says:`}</Card.Header>
              <Card.Description>{this.props.currentNote.content}</Card.Description>
            </Card.Content>
          </Card>
          <h3>Comments:</h3>
          {this.props.fetchingComments ? <Loader active inline='centered' /> : this.renderComments()}
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