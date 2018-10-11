import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, TextArea, Modal, Icon } from 'semantic-ui-react'
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
        <Button icon basic color="blue" style={{float: 'right', marginTop: '0.5%'}} onClick={this.props.hideNoteForm}>
          <Icon name='times' />
        </Button>
        <Modal.Content>
          <Modal.Header><h1 style={{fontFamily: 'Merriweather, serif'}}>Add a New Note</h1></Modal.Header>
          <h5 style={{textAlign: 'center'}}>Timecode: {actions.displayTimecode(this.props.currentVideoTime)}</h5>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field style={{fontFamily: 'Merriweather, serif'}} control={TextArea} name='content' placeholder='Add new note' value={this.state.note} onChange={this.handleChange} />
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
    addNote: (note) => {dispatch(actions.addNote(note))},
    hideNoteForm: () => {dispatch(actions.hideNoteForm())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
