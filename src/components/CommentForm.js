import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import * as actions from '../actions'

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      user_id: this.props.user.id,
      note_id: this.props.currentNote.id
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postComment(this.state)
    this.setState({...this.state, content: ''})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input name="content" value={this.state.content} placeholder='Add Comment' onChange={this.handleChange}/>
        </Form.Field>
        <Button basic color="blue" type="submit">Post Comment</Button>
      </Form>
    )
  }

}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (comment) => {dispatch(actions.postComment(comment))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
