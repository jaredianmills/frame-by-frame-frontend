import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, TextArea, Modal } from 'semantic-ui-react'
import * as actions from '../actions'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      timecode: this.props.currentVideoTime,
      project_id: this.props.currentProject.id,
      user_id: this.props.user.id
    }
  }

  handleChange = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.hideNoteForm()
    this.props.postNote(this.state)
    this.setState({...this.state, content: ''})
  }

  render() {
    console.log(this.props);
    return (
      <Modal open={this.props.displayNoteForm}>
        <Button style={{float: 'right'}} onClick={this.props.hideNoteForm}>x</Button>
        <Modal.Content>
          <Modal.Header><h1>Add a New Note</h1></Modal.Header>
          <h5 style={{textAlign: 'center'}}>Timecode: {actions.displayTimecode(this.props.currentVideoTime)}</h5>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field control={TextArea} name='content' placeholder='Add new note' value={this.state.note} onChange={this.handleChange} />
            <Button basic color='blue'>Submit</Button>
          </Form>
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
    postNote: (note) => {dispatch(actions.postNote(note))},
    addNote: (note, API) => {dispatch(actions.addNote(note, API))},
    hideNoteForm: () => {dispatch(actions.hideNoteForm())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
