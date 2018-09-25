import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message, TextArea, Header, Modal } from 'semantic-ui-react'
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

  displayTimecode = () => {
    let minutes = Math.floor(this.props.currentVideoTime / 60)
    let hours = Math.floor(minutes / 60)
    let seconds = Math.round(this.props.currentVideoTime - minutes * 60)

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

  render() {
    console.log(this.props);
    return (
      // <div style={{width: "50%", height: 'auto', marginLeft: '3%', marginTop: '2%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue'}}>
      // <div>
      <Modal open={this.props.displayNoteForm}>
        <Button style={{float: 'right'}} onClick={this.props.hideNoteForm}>x</Button>
        <Modal.Content>
          {/* <h3 style={{marginLeft: '38%'}}>Add a New Note</h3> */}
          <Modal.Header><h1>Add a New Note</h1></Modal.Header>
          <h5 style={{textAlign: 'center'}}>Timecode: {this.displayTimecode()}</h5>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field control={TextArea} name='content' placeholder='Add new note' value={this.state.note} onChange={this.handleChange} />
            <Button>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
      // {/* </div> */}
      // {/* </div> */}
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
